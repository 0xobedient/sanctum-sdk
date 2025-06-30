import { VersionedTransaction } from "@solana/web3.js";
import { BaseWallet } from "../../core";
import { generateTransaction, transactionToInstruction } from "../../shared";

export async function createTransaction(
  unsignedTx: string,
  signer: BaseWallet
): Promise<VersionedTransaction> {
  const instructions = transactionToInstruction(unsignedTx);
  const transaction = await generateTransaction(signer, instructions);

  return transaction;
}
