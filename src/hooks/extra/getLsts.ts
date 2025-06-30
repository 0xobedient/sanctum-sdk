import {
  EXTRA_API_ROUTES,
  handleError,
  SANCTUM_EXTRA_API_URI,
} from "../../shared";

export async function getLsts() {
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

    const data = response.json();

    return data;
  } catch (error) {
    throw new Error(handleError(error, "getLsts"));
  }
}
