import {
  EXTRA_API_ROUTES,
  GetLstMetaParams,
  handleError,
  SANCTUM_EXTRA_API_URI,
  toQueryString,
} from "src/shared";

export async function getLstMeta(params: GetLstMetaParams) {
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

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(handleError(error, "getLstMeta"));
  }
}
