import {
  ErrorResponse,
  EXTRA_API_ROUTES,
  GetLstSolValueResponse,
  handleError,
  SANCTUM_EXTRA_API_URI,
} from "../../shared";

export async function getLstSolValue(): Promise<
  GetLstSolValueResponse & ErrorResponse
> {
  try {
    const response = await fetch(
      SANCTUM_EXTRA_API_URI + EXTRA_API_ROUTES.GET_LST_SOL_VALUE_CURRENT,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = (await response.json()) as GetLstSolValueResponse &
      ErrorResponse;

    return data;
  } catch (error) {
    throw new Error(handleError(error, "getLstSolValue"));
  }
}
