import {
  ComputeBudgetProgram,
  Keypair,
  PublicKey,
  Signer,
  Transaction,
  TransactionInstruction,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import { FeeTiers, PriorityFeeResponse } from "../types/fee";
import bs58 from "bs58";
import { feeTiers } from "../constants";
import { BaseWallet } from "src/core";
import { HELIUS_RPC_URI } from "../constants/endpoint";

export const transactionToInstruction = (transaction: string) => {
  const txBuffer = Buffer.from(transaction, "base64");

  const tx = VersionedTransaction.deserialize(txBuffer);

  const messages = tx.message;

  const instructions = messages.compiledInstructions.map((ix) => {
    return new TransactionInstruction({
      programId: messages.staticAccountKeys[ix.programIdIndex],
      keys: ix.accountKeyIndexes.map((i) => ({
        pubkey: messages.staticAccountKeys[i],
        isSigner: messages.isAccountSigner(i),
        isWritable: messages.isAccountWritable(i),
      })),
      data: Buffer.from(String(ix.data), "base64"),
    });
  });

  return instructions;
};

export const generateTxByInstruction = (
  instructions: TransactionInstruction[],
  signer: PublicKey,
  blockHash: string
) => {
  const txMessage = new TransactionMessage({
    payerKey: signer,
    recentBlockhash: blockHash,
    instructions,
  }).compileToV0Message();

  return new VersionedTransaction(txMessage);
};

export const fetchPriorityFee = async (
  wallet: BaseWallet,
  signedTransaction: Transaction,
  feeTier: FeeTiers
) => {
  try {
    const response = await fetch(`${HELIUS_RPC_URI}?api-key=${wallet.apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "1",
        method: "getPriorityFeeEstimate",
        params: [
          {
            transaction: bs58.encode(
              signedTransaction.serialize() as Uint8Array
            ),
            options: {
              priorityLevel:
                feeTier === "min"
                  ? "Min"
                  : feeTier === "mid"
                  ? "Medium"
                  : "High",
            },
          },
        ],
      } as PriorityFeeResponse),
    });

    return response.json();
  } catch (error) {
    throw error;
  }
};

export async function getComputeBudgetInstructions(
  wallet: BaseWallet,
  instructions: TransactionInstruction[],
  feeTier: keyof typeof feeTiers
): Promise<{
  computeBudgetLimitInstruction: TransactionInstruction;
  computeBudgetPriorityFeeInstructions: TransactionInstruction;
}> {
  const { blockhash, lastValidBlockHeight } =
    await wallet.connection.getLatestBlockhash();
  const messageV0 = new TransactionMessage({
    payerKey: wallet.publicKey,
    recentBlockhash: blockhash,
    instructions: instructions,
  }).compileToV0Message();
  const transaction = new VersionedTransaction(messageV0);
  const simulatedTx = await wallet.connection.simulateTransaction(transaction);
  const estimatedComputeUnits = simulatedTx.value.unitsConsumed;
  const safeComputeUnits = Math.ceil(
    estimatedComputeUnits
      ? Math.max(estimatedComputeUnits + 100000, estimatedComputeUnits * 1.2)
      : 200000
  );
  const computeBudgetLimitInstruction =
    ComputeBudgetProgram.setComputeUnitLimit({
      units: safeComputeUnits,
    });

  let priorityFee: number;

  const legacyTransaction = new Transaction();
  legacyTransaction.recentBlockhash = blockhash;
  legacyTransaction.lastValidBlockHeight = lastValidBlockHeight;
  legacyTransaction.feePayer = wallet.publicKey;

  // Add the compute budget instruction and original instructions
  legacyTransaction.add(computeBudgetLimitInstruction, ...instructions);

  // Sign the transaction
  const signedTransaction = await wallet.signTransaction(legacyTransaction);

  // Use Helius API for priority fee calculation
  const data = await fetchPriorityFee(wallet, signedTransaction, feeTier);

  if (data.error) {
    throw new Error("Error fetching priority fee from Helius API");
  }
  priorityFee = data.result.priorityFeeEstimate;

  const computeBudgetPriorityFeeInstructions =
    ComputeBudgetProgram.setComputeUnitPrice({
      microLamports: priorityFee,
    });

  return {
    computeBudgetLimitInstruction,
    computeBudgetPriorityFeeInstructions,
  };
}

export async function generateTransaction(
  wallet: BaseWallet,
  instructions: TransactionInstruction[],
  feeTier?: keyof typeof feeTiers
): Promise<VersionedTransaction> {
  const ixComputeBudget = await getComputeBudgetInstructions(
    wallet,
    instructions,
    feeTier ?? "mid"
  );
  const allInstructions = [
    ixComputeBudget.computeBudgetLimitInstruction,
    ixComputeBudget.computeBudgetPriorityFeeInstructions,
    ...instructions,
  ];

  const { blockhash } = await wallet.connection.getLatestBlockhash();

  const transaction = generateTxByInstruction(
    allInstructions,
    wallet.publicKey,
    blockhash
  );

  return transaction;
}

export async function sendTx(
  wallet: BaseWallet,
  instructions: TransactionInstruction[],
  otherKeypairs?: Keypair[],
  feeTier?: keyof typeof feeTiers
): Promise<string> {
  const ixComputeBudget = await getComputeBudgetInstructions(
    wallet,
    instructions,
    feeTier ?? "mid"
  );
  const allInstructions = [
    ixComputeBudget.computeBudgetLimitInstruction,
    ixComputeBudget.computeBudgetPriorityFeeInstructions,
    ...instructions,
  ];

  const { blockhash } = await wallet.connection.getLatestBlockhash();

  const transaction = generateTxByInstruction(
    allInstructions,
    wallet.publicKey,
    blockhash
  );
  transaction.sign([...(otherKeypairs ?? [])] as Signer[]);
  const signedTransaction = await wallet.signTransaction(transaction);

  const timeoutMs = 90000;
  const startTime = Date.now();
  while (Date.now() - startTime < timeoutMs) {
    const transactionStartTime = Date.now();

    const signature = await wallet.connection.sendTransaction(
      signedTransaction as VersionedTransaction,
      {
        maxRetries: 0,
        skipPreflight: false,
      }
    );

    const statuses = await wallet.connection.getSignatureStatuses([signature]);
    if (statuses.value[0]) {
      if (!statuses.value[0].err) {
        return signature;
      }
      throw new Error(
        `Transaction failed: ${statuses.value[0].err.toString()}`
      );
    }

    const elapsedTime = Date.now() - transactionStartTime;
    const remainingTime = Math.max(0, 1000 - elapsedTime);
    if (remainingTime > 0) {
      await new Promise((resolve) => setTimeout(resolve, remainingTime));
    }
  }
  throw new Error("Transaction timeout");
}
