import {
  ErrorResponse,
  EXTRA_API_ROUTES,
  GetLstApyIndivEpochsParams,
  GetLstApyIndivEpochsResponse,
  handleError,
  SANCTUM_EXTRA_API_URI,
  toQueryString,
} from "../../shared";

export async function getLstApyIndivEpochs(
  params: GetLstApyIndivEpochsParams
): Promise<GetLstApyIndivEpochsResponse & ErrorResponse> {
  try {
    const query = toQueryString(params);

    const response = await fetch(
      SANCTUM_EXTRA_API_URI + EXTRA_API_ROUTES.GET_LST_APY_INDIV_EPOCHS + query,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = (await response.json()) as GetLstApyIndivEpochsResponse &
      ErrorResponse;

    return data;
  } catch (error) {
    throw new Error(handleError(error, "getLstApyIndivEpochs"));
  }
}
