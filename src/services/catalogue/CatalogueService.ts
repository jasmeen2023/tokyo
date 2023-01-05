// import { LoginParams } from '@/hooks/auth/login/useLogin.types';

import { callApi } from '@/utils/apiUtils';
import catalogueEndpoints from '@/utils/endpoints/catalogue';

class CatalogueService {
  public createCatalogue = async ({ body, query }) => {
    return callApi({
      uriEndPoint: {
        ...catalogueEndpoints.create,
      },
      query,
      body,
    }).catch((error: any) => {
      throw error;
    });
  };
  public updateSingleCatalogue = async ({ pathParams, body, query }) => {
    return callApi({
      uriEndPoint: {
        ...catalogueEndpoints.updateSingle,
      },
      pathParams,
      query,
      body,
    }).catch((error: any) => {
      throw error;
    });
  };
  public deleteSingleCatalogue = async ({ pathParams, body, query }) => {
    return callApi({
      uriEndPoint: {
        ...catalogueEndpoints.deleteSingle,
      },
      pathParams,
      query,
      body,
    }).catch((error: any) => {
      throw error;
    });
  };
  public getAllCatalogue = async ({ body, query }) => {
    return callApi({
      uriEndPoint: {
        ...catalogueEndpoints.getAll,
      },
      query,
      body,
    }).catch((error: any) => {
      throw error;
    });
  };
  public getSingleCatalogue = async ({ pathParams, body, query }) => {
    return callApi({
      uriEndPoint: {
        ...catalogueEndpoints.getSingle,
      },
      pathParams,
      query,
      body,
    }).catch((error: any) => {
      throw error;
    });
  };
}
export default CatalogueService;
