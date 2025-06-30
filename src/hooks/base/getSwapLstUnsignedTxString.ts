import {
  BASE_API_ROUTES,
  GetSwapLstTxParams,
  handleError,
  SANCTUM_BASE_API_URI,
} from "../../shared";

export async function getSwapLstUnsignedTxString(params: GetSwapLstTxParams) {
  try {
    const response = await fetch(SANCTUM_BASE_API_URI + BASE_API_ROUTES.SWAP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(handleError(error, "getSwapLstUnsignedTxString"));
  }
}
