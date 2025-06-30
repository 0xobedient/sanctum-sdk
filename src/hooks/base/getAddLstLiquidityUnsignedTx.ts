import {
  BASE_API_ROUTES,
  GetAddLstLiquidityTxParams,
  handleError,
  SANCTUM_BASE_API_URI,
} from "../../shared";
import { BaseWallet } from "../../core";
import { VersionedTransaction } from "@solana/web3.js";
import { createTransaction } from "../helper";

export async function getAddLstLiquidityUnsignedTx(
  wallet: BaseWallet,
  params: GetAddLstLiquidityTxParams
): Promise<VersionedTransaction> {
  try {
    const response = await fetch(
      SANCTUM_BASE_API_URI + BASE_API_ROUTES.ADD_LIQUIDITY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      }
    );

    const data = await response.json();
    const transaction: VersionedTransaction = await createTransaction(
      data.tx,
      wallet
    );

    return transaction;
  } catch (error) {
    throw new Error(handleError(error, "getAddLstLiquidityUnsignedTx"));
  }
}
