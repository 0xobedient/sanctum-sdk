import {
  Keypair,
  PublicKey,
  Transaction,
  VersionedTransaction,
  SendOptions,
  TransactionSignature,
  Connection,
} from "@solana/web3.js";
import { IBaseWallet } from "./IBaseWallet";

export declare class BaseWallet implements IBaseWallet {
  readonly publicKey: PublicKey;
  readonly apiKey: string;
  readonly connection: Connection;
  private readonly payer;
  constructor(keypair: Keypair, connection: Connection);
  signTransaction<T extends Transaction | VersionedTransaction>(
    transaction: T
  ): Promise<T>;
  signAllTransactions<T extends Transaction | VersionedTransaction>(
    transactions: T[]
  ): Promise<T[]>;
  signAndSendTransaction<T extends Transaction | VersionedTransaction>(
    transaction: T,
    options?: SendOptions
  ): Promise<{
    signature: TransactionSignature;
  }>;
  signMessage(message: Uint8Array): Promise<Uint8Array>;
}
