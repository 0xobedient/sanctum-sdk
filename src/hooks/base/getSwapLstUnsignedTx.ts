import { VersionedTransaction } from "@solana/web3.js";
import { BaseWallet } from "../../core";
import {
  BASE_API_ROUTES,
  handleError,
  SANCTUM_BASE_API_URI,
  GetSwapLstTxParams,
} from "../../shared";
import { createTransaction } from "../helper";

export async function getSwapLstUnsignedTx(
  wallet: BaseWallet,
  params: GetSwapLstTxParams
) {
  try {
    const response = await fetch(SANCTUM_BASE_API_URI + BASE_API_ROUTES.SWAP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    const data = await response.json();
    const transaction: VersionedTransaction = await createTransaction(
      data.tx,
      wallet
    );

    return transaction;
  } catch (error) {
    throw new Error(handleError(error, "getSwapLstUnsignedTx"));
  }
}
