import { BaseWallet } from "../../core";
import {
  BASE_API_ROUTES,
  handleError,
  RemoveLstLiquidityParams,
  RemoveLstLiquidityResponse,
  SANCTUM_BASE_API_URI,
} from "../../shared";
import { buildTransaction } from "../helper";

export async function removeLstLiquidity(
  wallet: BaseWallet,
  params: RemoveLstLiquidityParams
): Promise<RemoveLstLiquidityResponse> {
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

      const signature = await buildTransaction(data.tx, wallet);

      return { signature };
    }

    const error = await response.text();
    throw new Error(handleError(error, "removeLstLiquidity"));
  } catch (error) {
    throw new Error(handleError(error, "removeLstLiquidity"));
  }
}
