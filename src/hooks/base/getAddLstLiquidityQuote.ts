import {
  handleError,
  toQueryString,
  GetAddLstLiquidityQuoteParams,
  BASE_API_ROUTES,
  SANCTUM_BASE_API_URI,
  GetAddLstLiquidityQuoteResponse,
} from "../../shared";

export async function getAddLstLiquidityQuote(
  params: GetAddLstLiquidityQuoteParams
): Promise<GetAddLstLiquidityQuoteResponse> {
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

    if (response.ok) {
      const data = (await response.json()) as GetAddLstLiquidityQuoteResponse;

      return data;
    }

    const error = await response.text();

    throw new Error(handleError(error, "getAddLstLiquidityQuote"));
  } catch (error) {
    throw new Error(handleError(error, "getAddLstLiquidityQuote"));
  }
}
