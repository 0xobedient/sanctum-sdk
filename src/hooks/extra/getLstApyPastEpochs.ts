import {
  ErrorResponse,
  EXTRA_API_ROUTES,
  GetLstApyLatestResponse,
  GetLstQpyPastEpochsParams,
  handleError,
  SANCTUM_EXTRA_API_URI,
  toQueryString,
} from "../../shared";

export async function getLstApyPastEpochs(
  params: GetLstQpyPastEpochsParams
): Promise<GetLstApyLatestResponse & ErrorResponse> {
  try {
    const query = toQueryString(params);

    const response = await fetch(
      SANCTUM_EXTRA_API_URI + EXTRA_API_ROUTES.GET_LST_APY_PAST_EPOCHS + query,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = (await response.json()) as GetLstApyLatestResponse &
      ErrorResponse;

    return data;
  } catch (error) {
    throw new Error(handleError(error, "getLstApyPastEpochs"));
  }
}
