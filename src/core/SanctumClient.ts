import { ISanctumClient } from "./ISanctumClient";
import { Connection } from "@solana/web3.js";

export class SanctumClient implements ISanctumClient {
  private readonly __connection!: Connection;

  constructor(endpoint?: string) {
    if (endpoint) {
      this.__connection = new Connection(endpoint);
    }
  }

  private __isConnected() {
    if (!this.__connection) {
      false;
    }

    return true;
  }
}
