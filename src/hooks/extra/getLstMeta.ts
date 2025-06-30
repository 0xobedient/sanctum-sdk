import {
  EXTRA_API_ROUTES,
  GetLstMetaResposne,
  GetLstMetaParams,
  handleError,
  SANCTUM_EXTRA_API_URI,
  toQueryString,
  ErrorResponse,
} from "../../shared";

export async function getLstMeta(
  params: GetLstMetaParams
): Promise<GetLstMetaResposne & ErrorResponse> {
  try {
    const query = toQueryString(params);

    const response = await fetch(
      SANCTUM_EXTRA_API_URI + EXTRA_API_ROUTES.GET_LST_META + query,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = (await response.json()) as GetLstMetaResposne & ErrorResponse;

    return data;
  } catch (error) {
    throw new Error(handleError(error, "getLstMeta"));
  }
}
