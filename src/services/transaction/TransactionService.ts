// import { LoginParams } from '@/hooks/auth/login/useLogin.types';

import { callApi } from '@/utils/apiUtils';
import transactionEndpoints from '@/utils/endpoints/transaction';

// import { CreateTokenResponse, VerifyResponse } from './AuthServices.types';

class TransactionServices {
  public createTransaction = async (body: any) => {
    return callApi({
      uriEndPoint: {
        ...transactionEndpoints.createTransaction,
      },
      body,
    }).catch((error: any) => {
      throw error;
    });
  };
  public getAllTransactions = async () => {
    return callApi({
      uriEndPoint: {
        ...transactionEndpoints.getAllTransactions,
      },
    }).catch((error: any) => {
      throw error;
    });
  };
  public updateTransaction = async (transactionData: any, body: any) => {
    return callApi({
      uriEndPoint: {
        ...transactionEndpoints.updateTransaction,
      },
      pathParams: transactionData,
      body,
    }).catch((error: any) => {
      throw error;
    });
  };
}
export default TransactionServices;
