import {
  EXTRA_API_ROUTES,
  GetLstCurrentInfinityAllocationResponse,
  handleError,
  SANCTUM_EXTRA_API_URI,
} from "../../shared";

export async function getLstCurrentInfinityAllocation(): Promise<GetLstCurrentInfinityAllocationResponse> {
  try {
    const response = await fetch(
      SANCTUM_EXTRA_API_URI +
        EXTRA_API_ROUTES.GET_LST_INFINITY_ALLOCATION_CURRENT,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data =
      (await response.json()) as GetLstCurrentInfinityAllocationResponse;

    return data;
  } catch (error) {
    throw new Error(handleError(error, "getLstCurrentInfinityAllocation"));
  }
}
