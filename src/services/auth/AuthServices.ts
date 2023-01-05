import { LoginData } from '@/hooks/auth/login/useLogin.types';
import { RegisterParams } from '@/hooks/auth/register/useRegister.types';

import { callApi } from '@/utils/apiUtils';
import userEndpoints from '@/utils/endpoints/auth';

import { CreateTokenResponse } from './AuthServices.types';

class AuthServices {
  public login = async (payload: LoginData) => {
    return callApi<CreateTokenResponse>({
      uriEndPoint: {
        ...userEndpoints.accessSignin,
        headerProps: {
          apiKey: btoa(
            `${payload.email || ''}:${payload.password || ''}:${
              payload.type || ''
            }`
          ),
        },
      },
    }).catch((error: any) => {
      console.log(error);
      throw error;
    });
  };

  public register = async (payload: RegisterParams) => {
    return callApi<CreateTokenResponse>({
      uriEndPoint: {
        ...userEndpoints.register,
        headerProps: {
          payload: btoa(
            `${payload.name || ''}:${payload.email || ''}:${
              payload.password || ''
            }:${payload.type || ''}:${payload.role || ''}`
          ),
        },
      },
    })
      .then((tokenResponse) => {
        return tokenResponse;
      })
      .catch((error: any) => {
        return error;
      });
  };

  public logout = async () => {
    return callApi<CreateTokenResponse>({
      uriEndPoint: {
        ...userEndpoints.accessLogout,
      },
    })
      .then((logoutResponse) => {
        return logoutResponse;
      })
      .catch((error: any) => {
        throw error;
      });
  };
}
export default AuthServices;
