// import { LoginParams } from '@/hooks/auth/login/useLogin.types';

import { callApi } from '@/utils/apiUtils';
import requestEndpoints from '@/utils/endpoints/request';

// import { CreateTokenResponse, VerifyResponse } from './AuthServices.types';

class RequestServices {
  public getSingleRequest = async ({ pathParams }) => {
    return callApi({
      uriEndPoint: {
        ...requestEndpoints.getSingleRequests,
      },
      pathParams,
    }).catch((error: any) => {
      throw error;
    });
  };
  public getAllRequests = async () => {
    return callApi({
      uriEndPoint: {
        ...requestEndpoints.getAllRequests,
      },
    }).catch((error: any) => {
      throw error;
    });
  };

  public testServer = async () => {
    return callApi({
      uriEndPoint: {
        ...requestEndpoints.testServer,
      },
    }).catch((error: any) => {
      throw error;
    });
  };
}
export default RequestServices;
