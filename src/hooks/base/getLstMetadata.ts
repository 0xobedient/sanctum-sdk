import {
  BASE_API_ROUTES,
  GetLstMetadataParams,
  GetLstMetadataResponse,
  handleError,
  SANCTUM_BASE_API_URI,
} from "../../shared";

export async function getLstMetadata(
  params: GetLstMetadataParams
): Promise<GetLstMetadataResponse> {
  try {
    const response = await fetch(
      SANCTUM_BASE_API_URI + BASE_API_ROUTES.GET_LST_METADATA + params.mint,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = (await response.json()) as GetLstMetadataResponse;

      return data;
    }

    const error = await response.text();
    throw new Error(handleError(error, "getLstMetadata"));
  } catch (error) {
    throw new Error(handleError(error, "getLstMetadata"));
  }
}
