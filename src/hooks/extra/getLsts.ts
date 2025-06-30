import {
  ErrorResponse,
  EXTRA_API_ROUTES,
  GetLstsResponse,
  handleError,
  SANCTUM_EXTRA_API_URI,
} from "../../shared";

export async function getLsts(): Promise<GetLstsResponse & ErrorResponse> {
  try {
    const response = await fetch(
      SANCTUM_EXTRA_API_URI + EXTRA_API_ROUTES.GET_LSTS,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = (await response.json()) as GetLstsResponse & ErrorResponse;

    return data;
  } catch (error) {
    throw new Error(handleError(error, "getLsts"));
  }
}
