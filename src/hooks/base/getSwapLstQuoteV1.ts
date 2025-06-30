import {
  BASE_API_ROUTES,
  GetSwapLstQuoteParams,
  GetSwapLstQuoteV1Response,
  handleError,
  SANCTUM_BASE_API_URI,
  toQueryString,
} from "../../shared";

export async function getSwapLstQuoteV1({
  swapSrc,
  ...params
}: GetSwapLstQuoteParams): Promise<GetSwapLstQuoteV1Response> {
  try {
    const query = toQueryString(params);
    const response = await fetch(
      SANCTUM_BASE_API_URI + BASE_API_ROUTES.GET_V1_SWAP_QUOTE + query,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = (await response.json()) as GetSwapLstQuoteV1Response;

      return data;
    }

    const error = await response.text();

    throw new Error(handleError(error, "getSwapLstQuoteV1"));
  } catch (error) {
    throw new Error(handleError(error, "getSwapLstQuoteV1"));
  }
}
