export type CryptoOrderStatus =
  | 'completed'
  | 'pending'
  | 'failed'
  | 'notinitialized';

export interface CryptoOrder {
  id: string;
  status: CryptoOrderStatus;
  customerName: string;
  orderDate: number;
  productType: string;
  fieldAgent?: string;
  amountCrypto: number | null;
  productName: string;
  cryptoCurrency: string;
  currency: string;
}
