import { PriorityFeeType } from "./fee";
import { ModeType } from "./mode";

export type AddLstLiquidityParams = {
  amount: string;
  dstLpAcc: string | null;
  lstMint: string;
  priorityFee: PriorityFeeType;
  quotedAmount: string;
  signer: string;
  srcLstAcc: string | null;
};

export type GetAddLstLiquidityTxParams = {
  amount: string;
  dstLpAcc: string | null;
  lstMint: string;
  priorityFee: PriorityFeeType;
  quotedAmount: string;
  signer: string;
  srcLstAcc: string | null;
};

export type GetAddLstLiquidityQuoteParams = {
  lstMint: string;
  amount: number;
};

export type RemoveLstLiquidityParams = {
  amount: string;
  dstLpAcc: string | null;
  lstMint: string;
  priorityFee: PriorityFeeType;
  quotedAmount: string;
  signer: string;
  srcLstAcc: string | null;
};

export type GetRemoveLstLiquidityTxParams = {
  amount: string;
  dstLpAcc: string | null;
  lstMint: string;
  priorityFee: PriorityFeeType;
  quotedAmount: string;
  signer: string;
  srcLstAcc: string | null;
};

export type GetRemoveLstLiquidityQuoteParams = {
  lstMint: string;
  amount: number;
};

export type SwapLstParams = {
  amount: string;
  dstLstAcc: string | null;
  input: string;
  mode: ModeType;
  outputLstMint: string;
  priorityFee: PriorityFeeType;
  quotedAmount: string;
  signer: string;
  srcAcc: string | null;
  swapSrc: string;
};

export type GetSwapLstTxParams = {
  amount: string;
  dstLstAcc: string | null;
  input: string;
  mode: ModeType;
  outputLstMint: string;
  priorityFee: PriorityFeeType;
  quotedAmount: string;
  signer: string;
  srcAcc: string | null;
  swapSrc: string;
};

export type GetSwapLstQuoteParams = {
  input: string;
  outputLstMint: string;
  amount: string;
  mode: ModeType;
  swapSrc: string[];
};

export type GetLstMetadataParams = {
  mint: string;
};

export type GetLstPriceParams = {
  input: string[];
};

export type GetLstApyInceptionParams = {
  lst: string[];
};

export type GetLstApyIndivEpochsParams = {
  lst: string[];
  n: number;
  end: number;
};

export type GetLstApyLatestParams = {
  lst: string[];
};

export type GetLstQpyPastEpochsParams = {
  lst: string[];
  epochs: number;
};

export type GetLstHoldersParams = {
  lst: string[];
};

export type GetLstMetaParams = {
  lst: string[];
};

export type GetLstTvlParams = {
  lst: string[];
};
