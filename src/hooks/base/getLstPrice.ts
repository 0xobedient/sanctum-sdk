import {
  BASE_API_ROUTES,
  GetLstPriceParams,
  GetLstPriceResponse,
  handleError,
  SANCTUM_BASE_API_URI,
  toQueryString,
} from "../../shared";

export async function getLstPrice(
  params: GetLstPriceParams
): Promise<GetLstPriceResponse> {
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

    if (response.ok) {
      const data = (await response.json()) as GetLstPriceResponse;

      return data;
    }

    const error = await response.text();

    throw new Error(handleError(error, "getLstPrice"));
  } catch (error) {
    throw new Error(handleError(error, "getLstPrice"));
  }
}
