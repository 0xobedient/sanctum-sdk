import { BaseWallet } from "../../core";
import { sendTx, transactionToInstruction } from "../../shared";

export async function buildTransaction(
  unsignedTx: string,
  signer: BaseWallet
): Promise<string> {
  const instructions = transactionToInstruction(unsignedTx);
  const signature = await sendTx(signer, instructions);

  return signature;
}
