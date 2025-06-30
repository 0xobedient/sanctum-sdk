import {
  BASE_API_ROUTES,
  GetAddLstLiquidityTxParams,
  GetAddLstLiquidityUnsignedTxResponse,
  handleError,
  SANCTUM_BASE_API_URI,
} from "../../shared";
import { BaseWallet } from "../../core";
import { VersionedTransaction } from "@solana/web3.js";
import { createTransaction } from "../helper";

export async function getAddLstLiquidityUnsignedTx(
  wallet: BaseWallet,
  params: GetAddLstLiquidityTxParams
): Promise<GetAddLstLiquidityUnsignedTxResponse> {
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

    if (response.ok) {
      const data = await response.json();
      const transaction: VersionedTransaction = await createTransaction(
        data.tx,
        wallet
      );

      return { transaction };
    }

    const error = await response.text();

    throw new Error(handleError(error, "getAddLstLiquidityUnsignedTx"));
  } catch (error) {
    throw new Error(handleError(error, "getAddLstLiquidityUnsignedTx"));
  }
}
