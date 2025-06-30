import { feeTiers } from "../constants";

export interface PriorityFeeResponse {
  jsonrpc: string;
  id: string;
  method: string;
  params: Array<{
    transaction: string;
    options: { priorityLevel: string };
  }>;
}

export type FeeTiers = keyof typeof feeTiers;

export type PriorityFeeType = {
  Auto: {
    max_unit_price_micro_lamports: number;
    unit_limit: number;
  };
};
