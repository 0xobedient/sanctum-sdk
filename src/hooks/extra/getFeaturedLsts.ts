import {
  EXTRA_API_ROUTES,
  GetFeaturedLstsResponse,
  handleError,
  SANCTUM_EXTRA_API_URI,
} from "../../shared";

export async function getFeaturedLsts(): Promise<GetFeaturedLstsResponse> {
  try {
    const response = await fetch(
      SANCTUM_EXTRA_API_URI + EXTRA_API_ROUTES.GET_FEATURED_LSTS,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = (await response.json()) as GetFeaturedLstsResponse;

    return data;
  } catch (error) {
    throw new Error(handleError(error, "getFeaturedLsts"));
  }
}
