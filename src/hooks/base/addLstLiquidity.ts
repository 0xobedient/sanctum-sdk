import { BaseWallet } from "../../core";
import {
  BASE_API_ROUTES,
  SANCTUM_BASE_API_URI,
  AddLstLiquidityParams,
  handleError,
} from "../../shared";
import { buildTransaction } from "../helper";

export async function addLstLiquidity(
  wallet: BaseWallet,
  params: AddLstLiquidityParams
) {
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
    const signature = await buildTransaction(data.tx, wallet);

    return signature;
  } catch (error) {
    throw new Error(handleError(error, "addLstLiquidity"));
  }
}
