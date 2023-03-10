import { subDays } from 'date-fns';

import { CryptoOrder } from '@/models/crypto_order';

import RecentOrdersTable from './RecentOrdersTable';

function RecentOrders() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      customerName: 'Chinelo Chyke',
      orderDate: new Date().getTime(),
      status: 'completed',
      productType: 'MoodBoard',
      fieldAgent: 'Chakrika Joyanto',
      amountCrypto: 128000,
      productName: 'Product Name 1',
      cryptoCurrency: 'Dhs',
      currency: '$',
    },
    {
      id: '2',
      customerName: 'Chinelo Chyke',
      orderDate: subDays(new Date(), 1).getTime(),
      status: 'completed',
      productType: 'Catalog',
      fieldAgent: 'Chakrika Joyanto',
      amountCrypto: 128000,
      productName: 'Product Name 1',
      cryptoCurrency: 'Dhs',
      currency: '$',
    },
    {
      id: '3',
      customerName: 'Kip Colison',
      orderDate: subDays(new Date(), 5).getTime(),
      status: 'failed',
      productType: 'Catalog',
      amountCrypto: 128000,
      productName: 'Product Name 1',
      cryptoCurrency: 'Dhs',
      currency: '$',
    },
    {
      id: '4',
      customerName: 'Kip Colison',
      orderDate: subDays(new Date(), 55).getTime(),
      status: 'completed',
      productType: 'MoodBoard',
      amountCrypto: 128000,
      productName: 'Product Name 1',
      cryptoCurrency: 'Dhs',
      currency: '$',
    },
    {
      id: '5',
      customerName: 'Kip Colison',
      orderDate: subDays(new Date(), 56).getTime(),
      status: 'pending',
      productType: 'Catalog',
      fieldAgent: 'Chakrika Joyanto',
      amountCrypto: 128000,
      productName: 'Product Name 1',
      cryptoCurrency: 'Dhs',
      currency: '$',
    },
    {
      id: '6',
      customerName: 'Kip Colison',
      orderDate: subDays(new Date(), 33).getTime(),
      status: 'completed',
      productType: 'MoodBoard',
      fieldAgent: 'Chakrika Joyanto',
      amountCrypto: 128000,
      productName: 'Product Name 1',
      cryptoCurrency: 'Dhs',
      currency: '$',
    },
    {
      id: '7',
      customerName: 'Kip Colison',
      orderDate: new Date().getTime(),
      status: 'pending',
      productType: 'Catalog',
      amountCrypto: 128000,
      productName: 'Product Name 1',
      cryptoCurrency: 'Dhs',
      currency: '$',
    },
    {
      id: '8',
      customerName: 'Paypal Withdraw',
      orderDate: subDays(new Date(), 22).getTime(),
      status: 'completed',
      productType: 'Catalog',
      amountCrypto: 128000,
      productName: 'Product Name 1',
      cryptoCurrency: 'Dhs',
      currency: '$',
    },
    {
      id: '9',
      customerName: 'Kip Colison',
      orderDate: subDays(new Date(), 11).getTime(),
      status: 'completed',
      productType: 'Catalog',
      fieldAgent: 'Chakrika Joyanto',
      amountCrypto: 128000,
      productName: 'Product Name 1',
      cryptoCurrency: 'Dhs',
      currency: '$',
    },
    {
      id: '10',
      customerName: 'Wallet Transfer',
      orderDate: subDays(new Date(), 123).getTime(),
      status: 'failed',
      productType: 'MoodBoard',
      amountCrypto: 128000,
      productName: 'Product Name 1',
      cryptoCurrency: 'ADA',
      currency: '$',
    },
  ];

  return <RecentOrdersTable cryptoOrders={cryptoOrders} />;
}

export default RecentOrders;
