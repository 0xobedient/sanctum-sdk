import { VersionedTransaction } from "@solana/web3.js";

export type AddLstLquidityResponse = {
  signature: string;
};

export type GetAddLstLiquidityQuoteResponse = {
  lstAmount: string;
};

export type GetAddLstLiquidityUnsignedTxResponse = {
  transaction: VersionedTransaction;
};

export type GetAddLstLiquidityUnsignedTxStringResponse = {
  tx: string;
};

export type GetLstMetadataResponse = {
  name: string;
  symbol: string;
  description: string;
  image: string;
  external_uri: string | null;
  coingeckoId: string;
  twitter: string;
  website: string;
};

export type GetLstPriceResponse = {
  prices: {
    mint: string;
    amount: string;
  }[];
};

export type GetRemoveLstLiquidityQuoteResponse = {
  lstAmount: string;
};

export type GetRemoveLiquidityUnsignedTxResponse = {
  transaction: VersionedTransaction;
};

export type GetRemoveLstLiquidityUnsignedTxStringResponse = {
  tx: string;
};

export type GetSwapLstQuoteV1Response = {
  inAmount: string;
  outAmount: string;
  feeAmount: string;
  feeMint: string;
  feePct: string;
  swapSrc: string;
};

export type GetSwapLstQuoteV2Response = {
  inAmount: string;
  outAmount: string;
  swapSrc: string;
  fees: {
    code: string;
    rate: string;
    amt: string;
    mint: string;
  }[];
};

export type GetSwapLstUnsignedTxResponse = {
  transaction: VersionedTransaction;
};

export type GetSwapLstUnsignedTxStringResponse = {
  tx: string;
};

export type RemoveLstLiquidityResponse = {
  signature: string;
};

export type SwapLstResponse = {
  signature: string;
};

export type GetLstApyInceptionResponse = {
  apys: {
    [key: string]: number;
  };
};

export type GetFeaturedLstsResponse = {
  lsts: {
    apy: number;
    featureId: number;
    logoUri: string;
    mint: string;
    name: string;
    symbol: string;
  }[];
};

export type GetLstApyIndivEpochsResponse = {
  apys: {
    [key: string]: {
      epoch: number;
      end: number;
      apy: number;
    }[];
  };
};

export type GetLstApyLatestResponse = {
  apys: {
    [key: string]: number;
  };
};

export type GetLstApyPastEpochsResponse = {
  apys: {
    [key: string]: number;
  };
};

export type GetLstCategoriesResponse = {
  [key: string]: number;
};

export type GetLstCurrentInfinityAllocationResponse = {
  infinity: {
    [key: string]: {
      amt: string;
      solValue: string;
      share: number;
    };
  };
};

export type GetLstHoldersResponse = {
  holders: {
    [key: string]: {
      count: string;
      timestamp: string;
    };
  };
};

export type GetLstMetaResposne = {
  metas: {
    [key: string]: {
      Categories: string;
      "Feature ID": string;
      "First bullet point": string;
      "Launch Date": string;
      "Main value proposition": string;
      "Mint address": string;
      "Mint logo URL": string;
      "Mint name": string;
      "Mint symbol": string;
      "One-liner": string;
      Program: string;
      "Sanctum Automated": string;
      "Second bullet point": string;
      Status: string;
      "TG group link": string;
      "Third bullet point": string;
      "Twitter ": string;
      "Vote account": string;
      Website: string;
    }[];
  };
};

export type GetLstsResponse = {
  lsts: {
    [key: string]: {
      decimals: number;
      logo_uri: string;
      mint: string;
      name: string;
      pool: {
        pool: string;
        program: string;
        validator_list: string;
        vote_account: string;
      };
      meta: {
        Categories: string;
        "Feature ID": string;
        "First bullet point": string;
        "Launch Date": string;
        "Main value proposition": string;
        "Mint address": string;
        "Mint logo URL": string;
        "Mint name": string;
        "Mint symbol": string;
        "One-liner": string;
        Program: string;
        "Sanctum Automated": string;
        "Second bullet point": string;
        Status: string;
        "TG group link": string;
        "Third bullet point": string;
        "Twitter ": string;
        "Vote account": string;
        Website: string;
      } | null;
      symbol: string;
      token_program: string;
    };
  };
};

export type GetLstSolValueResponse = {
  solValues: {
    [key: string]: string;
  };
};

export type GetLstTvlResponse = {
  tvls: {
    [key: string]: string;
  };
};

export type ErrorResponse = {
  errs: {
    [key: string]: {
      code: string | null;
      message: string | null;
    };
  };
};
