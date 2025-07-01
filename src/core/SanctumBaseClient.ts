import {
  AddLstLiquidityParams,
  GetAddLstLiquidityQuoteParams,
  GetAddLstLiquidityTxParams,
  GetLstMetadataParams,
  GetLstPriceParams,
  GetRemoveLstLiquidityQuoteParams,
  GetRemoveLstLiquidityTxParams,
  GetSwapLstQuoteParams,
  GetSwapLstTxParams,
  RemoveLstLiquidityParams,
  SwapLstParams,
} from "../shared";
import {
  addLstLiquidity,
  getAddLstLiquidityQuote,
  getAddLstLiquidityUnsignedTx,
  getAddLstLiquidityUnsignedTxString,
  getLstMetadata,
  getLstPrice,
  getRemoveLiquidityUnsignedTx,
  getRemoveLstLiquidityQuote,
  getRemoveLstLiquidityUnsignedTxString,
  getSwapLstQuoteV1,
  getSwapLstQuoteV2,
  getSwapLstUnsignedTx,
  getSwapLstUnsignedTxString,
  removeLstLiquidity,
  swapLst,
} from "../hooks";
import { BaseWallet } from "./BaseWallet";
import { ISanctumBaseClient } from "./ISanctumBaseClient";
import { Connection, Keypair } from "@solana/web3.js";

export class SanctumBaseClient implements ISanctumBaseClient {
  private readonly wallet?: BaseWallet;

  constructor(keypair?: Keypair, connection?: Connection) {
    if (keypair && connection) {
      this.wallet = new BaseWallet(keypair, connection);
    }
  }

  async addLstLiquidity(params: AddLstLiquidityParams) {
    if (!this.wallet) {
      throw this.walletError();
    }
    return addLstLiquidity(this.wallet, params);
  }

  async getAddLstLiquidityQuote(params: GetAddLstLiquidityQuoteParams) {
    return getAddLstLiquidityQuote(params);
  }

  async getAddLstLiquidityUnsignedTx(params: GetAddLstLiquidityTxParams) {
    if (!this.wallet) {
      throw this.walletError();
    }
    return getAddLstLiquidityUnsignedTx(this.wallet, params);
  }

  async getAddLstLiquidityUnsignedTxString(params: GetAddLstLiquidityTxParams) {
    return getAddLstLiquidityUnsignedTxString(params);
  }

  async getLstMetadata(params: GetLstMetadataParams) {
    return getLstMetadata(params);
  }

  async getLstPrice(params: GetLstPriceParams) {
    return getLstPrice(params);
  }

  async getRemoveLstLiquidityQuote(params: GetRemoveLstLiquidityQuoteParams) {
    return getRemoveLstLiquidityQuote(params);
  }

  async getRemoveLiquidityUnsignedTx(params: GetRemoveLstLiquidityTxParams) {
    if (!this.wallet) {
      throw this.walletError();
    }
    return getRemoveLiquidityUnsignedTx(this.wallet, params);
  }

  async getRemoveLstLiquidityUnsignedTxString(
    params: GetRemoveLstLiquidityTxParams
  ) {
    return getRemoveLstLiquidityUnsignedTxString(params);
  }

  async getSwapLstQuoteV1(params: GetSwapLstQuoteParams) {
    return getSwapLstQuoteV1(params);
  }

  async getSwapLstQuoteV2(params: GetSwapLstQuoteParams) {
    return getSwapLstQuoteV2(params);
  }

  async getSwapLstUnsignedTx(params: GetSwapLstTxParams) {
    if (!this.wallet) {
      throw this.walletError();
    }
    return getSwapLstUnsignedTx(this.wallet, params);
  }

  async getSwapLstUnsignedTxString(params: GetSwapLstTxParams) {
    return getSwapLstUnsignedTxString(params);
  }

  async removeLstLiquidity(params: RemoveLstLiquidityParams) {
    if (!this.wallet) {
      throw this.walletError();
    }
    return removeLstLiquidity(this.wallet, params);
  }

  async swapLst(params: SwapLstParams) {
    if (!this.wallet) {
      throw this.walletError();
    }
    return swapLst(this.wallet, params);
  }

  private walletError() {
    return "Keypair is not configured. Please set the keypair before proceeding.";
  }
}
