import {
  BASE_API_ROUTES,
  GetSwapLstQuoteParams,
  handleError,
  SANCTUM_BASE_API_URI,
  toQueryString,
} from "../../shared";

export async function getSwapLstQuoteV1({
  swapSrc,
  ...params
}: GetSwapLstQuoteParams) {
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

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(handleError(error, "getSwapLstQuoteV1"));
  }
}
