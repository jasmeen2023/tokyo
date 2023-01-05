// import { LoginParams } from '@/hooks/auth/login/useLogin.types';

import { callApi } from '@/utils/apiUtils';
import imageEndpoints from '@/utils/endpoints/image';

// import { CreateTokenResponse, VerifyResponse } from './AuthServices.types';

class ImageServices {
  public imageUploadToAWS = async ({ body, query }) => {
    return callApi({
      uriEndPoint: {
        ...imageEndpoints.imageUploadToAWS,
        headerProps: {
          'Content-Type': 'multipart/form-data',
        },
      },
      query,
      body,
    }).catch((error: any) => {
      throw error;
    });
  };
}
export default ImageServices;
