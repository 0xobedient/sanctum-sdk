import {
  GetLstApyInceptionParams,
  GetLstApyIndivEpochsParams,
  GetLstApyLatestParams,
  GetLstHoldersParams,
  GetLstMetaParams,
  GetLstQpyPastEpochsParams,
  GetLstTvlParams,
} from "../shared";
import {
  getFeaturedLsts,
  getLstApyInception,
  getLstApyIndivEpochs,
  getLstApyLatest,
  getLstApyPastEpochs,
  getLstCategory,
  getLstCurrentInfinityAllocation,
  getLstHolders,
  getLstMeta,
  getLsts,
  getLstSolValue,
  getLstTvl,
} from "../hooks";
import { ISanctumExtraClient } from "./ISanctumExtraClient";

export class SanctumExtraClient implements ISanctumExtraClient {
  constructor() {}

  async getFeaturedLsts() {
    return getFeaturedLsts();
  }

  async getLstApyInception(parmas: GetLstApyInceptionParams) {
    return getLstApyInception(parmas);
  }

  async getLstApyIndivEpochs(params: GetLstApyIndivEpochsParams) {
    return getLstApyIndivEpochs(params);
  }

  async getLstApyLatest(params: GetLstApyLatestParams) {
    return getLstApyLatest(params);
  }

  async getLstApyPastEpochs(params: GetLstQpyPastEpochsParams) {
    return getLstApyPastEpochs(params);
  }

  async getLstCategory() {
    return getLstCategory();
  }

  async getLstCurrentInfinityAllocation() {
    return getLstCurrentInfinityAllocation();
  }

  async getLstHolders(params: GetLstHoldersParams) {
    return getLstHolders(params);
  }

  async getLstMet(params: GetLstMetaParams) {
    return getLstMeta(params);
  }

  async getLsts() {
    return getLsts();
  }

  async getLstSolValue() {
    return getLstSolValue();
  }

  async getLstTvl(params: GetLstTvlParams) {
    return getLstTvl(params);
  }
}
