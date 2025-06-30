import { BaseWallet } from "../../core";
import {
  BASE_API_ROUTES,
  SANCTUM_BASE_API_URI,
  AddLstLiquidityParams,
  handleError,
  AddLstLquidityResponse,
} from "../../shared";
import { buildTransaction } from "../helper";

export async function addLstLiquidity(
  wallet: BaseWallet,
  params: AddLstLiquidityParams
): Promise<AddLstLquidityResponse> {
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
      const signature = await buildTransaction(data.tx, wallet);

      return { signature };
    }

    const error = await response.text();

    throw new Error(handleError(error, "addLstLiquidity"));
  } catch (error) {
    throw new Error(handleError(error, "addLstLiquidity"));
  }
}
