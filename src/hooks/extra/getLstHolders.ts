import {
  ErrorResponse,
  EXTRA_API_ROUTES,
  GetLstHoldersParams,
  GetLstHoldersResponse,
  handleError,
  SANCTUM_EXTRA_API_URI,
  toQueryString,
} from "../../shared";

export async function getLstHolders(
  params: GetLstHoldersParams
): Promise<GetLstHoldersResponse & ErrorResponse> {
  try {
    const query = toQueryString(params);
    const response = await fetch(
      SANCTUM_EXTRA_API_URI + EXTRA_API_ROUTES.GET_LST_HOLDERS + query
    );

    const data = (await response.json()) as GetLstHoldersResponse &
      ErrorResponse;

    return data;
  } catch (error) {
    throw new Error(handleError(error, "getLstHolders"));
  }
}
