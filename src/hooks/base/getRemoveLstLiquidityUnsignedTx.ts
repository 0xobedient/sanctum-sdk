import { VersionedTransaction } from "@solana/web3.js";
import { BaseWallet } from "../../core";
import {
  BASE_API_ROUTES,
  GetRemoveLiquidityUnsignedTxResponse,
  GetRemoveLstLiquidityTxParams,
  handleError,
  SANCTUM_BASE_API_URI,
} from "../../shared";
import { createTransaction } from "../helper";

export async function getRemoveLiquidityUnsignedTx(
  wallet: BaseWallet,
  params: GetRemoveLstLiquidityTxParams
): Promise<GetRemoveLiquidityUnsignedTxResponse> {
  try {
    const response = await fetch(
      SANCTUM_BASE_API_URI + BASE_API_ROUTES.REMOVE_LIQUIDITY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      }
    );

    if (response.ok) {
      const data = await response.json();
      const transaction: VersionedTransaction = await createTransaction(
        data.tx,
        wallet
      );

      return { transaction };
    }

    const error = await response.text();
    throw new Error(handleError(error, "getRemoveLiquidityUnsignedTx"));
  } catch (error) {
    throw new Error(handleError(error, "getRemoveLiquidityUnsignedTx"));
  }
}
