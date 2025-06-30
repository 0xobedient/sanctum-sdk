import {
  EXTRA_API_ROUTES,
  GetLstTvlParams,
  handleError,
  SANCTUM_EXTRA_API_URI,
  toQueryString,
} from "../../shared";

export async function getLstTvl(params: GetLstTvlParams) {
  try {
    const query = toQueryString(params);
    const response = await fetch(
      SANCTUM_EXTRA_API_URI + EXTRA_API_ROUTES.GET_LST_TVL + query
    );

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(handleError(error, "getLstTvl"));
  }
}
