import {
  handleError,
  toQueryString,
  GetAddLstLiquidityQuoteParams,
  BASE_API_ROUTES,
  SANCTUM_BASE_API_URI,
} from "../../shared";

export async function getAddLstLiquidityQuote(
  params: GetAddLstLiquidityQuoteParams
) {
  try {
    const query = toQueryString(params);

    const response = await fetch(
      SANCTUM_BASE_API_URI + BASE_API_ROUTES.GET_ADD_LIQUIDITY_QUOTE + query,
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
    throw new Error(handleError(error, "getAddLstLiquidityQuote"));
  }
}
