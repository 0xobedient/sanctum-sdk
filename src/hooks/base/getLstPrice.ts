import {
  BASE_API_ROUTES,
  GetLstPriceParams,
  handleError,
  SANCTUM_BASE_API_URI,
  toQueryString,
} from "../../shared";

export async function getLstPrice(params: GetLstPriceParams) {
  try {
    const query = toQueryString(params);
    const response = await fetch(
      SANCTUM_BASE_API_URI + BASE_API_ROUTES.GET_LST_PRICE + query,
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
    throw new Error(handleError(error, "getLstPrice"));
  }
}
