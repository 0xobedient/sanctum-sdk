import {
  BASE_API_ROUTES,
  GetLstMetadataParams,
  handleError,
  SANCTUM_BASE_API_URI,
} from "../../shared";

export async function getLstMetadata(params: GetLstMetadataParams) {
  try {
    const resposne = await fetch(
      SANCTUM_BASE_API_URI + BASE_API_ROUTES.GET_LST_METADATA + params.mint,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await resposne.json();

    return data;
  } catch (error) {
    throw new Error(handleError(error, "getLstMetadata"));
  }
}
