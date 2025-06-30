import {
  BASE_API_ROUTES,
  GetRemoveLstLiquidityQuoteParams,
  GetRemoveLstLiquidityQuoteResponse,
  handleError,
  SANCTUM_BASE_API_URI,
  toQueryString,
} from "../../shared";

export async function getRemoveLstLiquidityQuote(
  params: GetRemoveLstLiquidityQuoteParams
): Promise<GetRemoveLstLiquidityQuoteResponse> {
  try {
    const query = toQueryString(params);
    const response = await fetch(
      SANCTUM_BASE_API_URI + BASE_API_ROUTES.GET_REMOVE_LIQUIDITY_QUOTE + query,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data =
        (await response.json()) as GetRemoveLstLiquidityQuoteResponse;

      return data;
    }

    const error = await response.text();
    throw new Error(handleError(error, "getRemoveLstLiquidityQuote"));
  } catch (error) {
    throw new Error(handleError(error, "getRemoveLstLiquidityQuote"));
  }
}
