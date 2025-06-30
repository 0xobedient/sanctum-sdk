import {
  BASE_API_ROUTES,
  GetSwapLstTxParams,
  GetSwapLstUnsignedTxStringResponse,
  handleError,
  SANCTUM_BASE_API_URI,
} from "../../shared";

export async function getSwapLstUnsignedTxString(
  params: GetSwapLstTxParams
): Promise<GetSwapLstUnsignedTxStringResponse> {
  try {
    const response = await fetch(SANCTUM_BASE_API_URI + BASE_API_ROUTES.SWAP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (response.ok) {
      const data =
        (await response.json()) as GetSwapLstUnsignedTxStringResponse;
      return data;
    }
    const error = await response.text();
    throw new Error(handleError(error, "getSwapLstUnsignedTxString"));
  } catch (error) {
    throw new Error(handleError(error, "getSwapLstUnsignedTxString"));
  }
}
