import {
  EXTRA_API_ROUTES,
  handleError,
  SANCTUM_EXTRA_API_URI,
} from "src/shared";

export async function getLstSolValue() {
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

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(handleError(error, "getLstSolValue"));
  }
}
