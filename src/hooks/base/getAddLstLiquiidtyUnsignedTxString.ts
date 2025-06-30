import {
  handleError,
  GetAddLstLiquidityTxParams,
  SANCTUM_BASE_API_URI,
  BASE_API_ROUTES,
  GetAddLstLiquidityUnsignedTxStringResponse,
} from "../../shared";

export async function getAddLstLiquidityUnsignedTxString(
  params: GetAddLstLiquidityTxParams
): Promise<GetAddLstLiquidityUnsignedTxStringResponse> {
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
      const data =
        (await response.json()) as GetAddLstLiquidityUnsignedTxStringResponse;

      return data;
    }

    const error = await response.text();

    throw new Error(handleError(error, "getAddLstLiquidityUnsignedTxString"));
  } catch (error) {
    throw new Error(handleError(error, "getAddLstLiquidityUnsignedTxString"));
  }
}
