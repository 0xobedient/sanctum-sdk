import {
  BASE_API_ROUTES,
  GetRemoveLstLiquidityTxParams,
  GetRemoveLstLiquidityUnsignedTxStringResponse,
  handleError,
  SANCTUM_BASE_API_URI,
} from "../../shared";

export async function getRemoveLstLiquidityUnsignedTxString(
  params: GetRemoveLstLiquidityTxParams
): Promise<GetRemoveLstLiquidityUnsignedTxStringResponse> {
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
      const data =
        (await response.json()) as GetRemoveLstLiquidityUnsignedTxStringResponse;

      return data;
    }

    const error = await response.text();

    throw new Error(
      handleError(error, "getRemoveLstLiquidityUnsignedTxString")
    );
  } catch (error) {
    throw new Error(
      handleError(error, "getRemoveLstLiquidityUnsignedTxString")
    );
  }
}
