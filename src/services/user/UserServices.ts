// import { LoginParams } from '@/hooks/auth/login/useLogin.types';

import { callApi } from '@/utils/apiUtils';
import userEndpoints from '@/utils/endpoints/user';

// import { CreateTokenResponse, VerifyResponse } from './AuthServices.types';

class UserServices {
  public getAllUsers = async ({ body, query }) => {
    return callApi({
      uriEndPoint: {
        ...userEndpoints.getAllUsers,
      },
      query,
      body,
    }).catch((error: any) => {
      throw error;
    });
  };
  public getStaff = async ({ body, query }) => {
    return callApi({
      uriEndPoint: {
        ...userEndpoints.getStaff,
      },
      query,
      body,
    }).catch((error: any) => {
      throw error;
    });
  };
  public getMyUser = async () => {
    return callApi({
      uriEndPoint: {
        ...userEndpoints.getMyUser,
      },
    }).catch((error: any) => {
      throw error;
    });
  };
  public createUser = async (data: any) => {
    return callApi({
      uriEndPoint: {
        ...userEndpoints.createUser,
      },
      body: data,
    }).catch((error: any) => {
      throw error;
    });
  };
  public updateUser = async ({ user, data }: any) => {
    return callApi({
      uriEndPoint: {
        ...userEndpoints.updateUser,
      },
      query: {
        id: user,
      },
      body: data,
    }).catch((error: any) => {
      throw error;
    });
  };
}
export default UserServices;
