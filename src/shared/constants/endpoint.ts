export const SANCTUM_EXTRA_API_URI = "https://extra-api.sanctum.so";

export const SANCTUM_BASE_API_URI = "https://sanctum-s-api.fly.dev";

export const HELIUS_RPC_URI = "https://mainnet.helius-rpc.com";

export const BASE_API_ROUTES = {
  ADD_LIQUIDITY: "/v1/liquidity/add",
  GET_ADD_LIQUIDITY_QUOTE: "/v1/liquidity/add/quote",
  REMOVE_LIQUIDITY: "/v1/liquidity/remove",
  GET_REMOVE_LIQUIDITY_QUOTE: "/v1/liquidity/remove/quote",
  SWAP: "/v1/swap",
  GET_V1_SWAP_QUOTE: "/v1/swap/quote",
  GET_V2_SWAP_QUOTE: "/v2/swap/quote",
  GET_LST_METADATA: "/v1/metadata",
  GET_LST_PRICE: "/v1/price",
};

export const EXTRA_API_ROUTES = {
  GET_FEATURED_LSTS: "/v1/featured-lsts",
  GET_LST_APY_INCEPTION: "/v1/apy/inception",
  GET_LST_APY_INDIV_EPOCHS: "/v1/apy/indiv-epochs",
  GET_LST_APY_LATEST: "/v1/apy/latest",
  GET_LST_APY_PAST_EPOCHS: "/v1/apy/past-epochs",
  GET_LST_HOLDERS: "/v1/holders",
  GET_LSTS: "/v1/lsts",
  GET_LST_META: "/v1/meta",
  GET_LST_SOL_VALUE_CURRENT: "/v1/sol-value/current",
  GET_LST_TVL: "/v1/tvl/current",
  GET_LST_CATEGORIES: "/v1/lst-categories",
  GET_LST_INFINITY_ALLOCATION_CURRENT: "/v1/infinity/allocation/current",
};
