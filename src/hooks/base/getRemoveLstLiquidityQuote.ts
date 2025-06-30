import {
  BASE_API_ROUTES,
  GetRemoveLstLiquidityQuoteParams,
  handleError,
  SANCTUM_BASE_API_URI,
  toQueryString,
} from "../../shared";

export async function getRemoveLstLiquidityQuote(
  params: GetRemoveLstLiquidityQuoteParams
) {
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

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(handleError(error, "getRemoveLstLiquidityQuote"));
  }
}
