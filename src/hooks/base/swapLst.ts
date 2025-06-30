import { BaseWallet } from "../../core";
import {
  BASE_API_ROUTES,
  handleError,
  SANCTUM_BASE_API_URI,
  SwapLstParams,
  SwapLstResponse,
} from "../../shared";
import { buildTransaction } from "../helper";

export async function swapLst(
  wallet: BaseWallet,
  params: SwapLstParams
): Promise<SwapLstResponse> {
  try {
    const response = await fetch(SANCTUM_BASE_API_URI + BASE_API_ROUTES.SWAP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (response.ok) {
      const data = await response.json();
      const signature = await buildTransaction(data.tx, wallet);

      return { signature };
    }

    const error = await response.text();
    throw new Error(handleError(error, "getSwapLstUnsignedTx"));
  } catch (error) {
    throw new Error(handleError(error, "getSwapLstUnsignedTx"));
  }
}
