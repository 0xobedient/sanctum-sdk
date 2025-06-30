import {
  ErrorResponse,
  EXTRA_API_ROUTES,
  GetLstApyInceptionParams,
  GetLstApyInceptionResponse,
  handleError,
  SANCTUM_EXTRA_API_URI,
  toQueryString,
} from "../../shared";

export async function getLstApyInception(
  params: GetLstApyInceptionParams
): Promise<GetLstApyInceptionResponse & ErrorResponse> {
  try {
    const query = toQueryString(params);

    const response = await fetch(
      SANCTUM_EXTRA_API_URI + EXTRA_API_ROUTES.GET_LST_APY_INCEPTION + query,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = (await response.json()) as GetLstApyInceptionResponse &
      ErrorResponse;

    return data;
  } catch (error) {
    throw new Error(handleError(error, "getLstApyInception"));
  }
}
