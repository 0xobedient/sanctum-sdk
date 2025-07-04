import {
  PublicKey,
  Transaction,
  VersionedTransaction,
  SendOptions,
  TransactionSignature,
  Connection,
} from "@solana/web3.js";

export interface IBaseWallet {
  readonly publicKey: PublicKey;
  readonly apiKey: string;
  readonly connection: Connection;
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
