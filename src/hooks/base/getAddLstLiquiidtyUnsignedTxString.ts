import {
  handleError,
  GetAddLstLiquidityTxParams,
  SANCTUM_BASE_API_URI,
  BASE_API_ROUTES,
} from "../../shared";

export async function getAddLstLiquidityUnsignedTxString(
  params: GetAddLstLiquidityTxParams
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

    return data;
  } catch (error) {
    throw new Error(handleError(error, "getAddLstLiquidityUnsignedTxString"));
  }
}
