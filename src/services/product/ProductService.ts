// import { LoginParams } from '@/hooks/auth/login/useLogin.types';

import { callApi } from '@/utils/apiUtils';
import productEndpoints from '@/utils/endpoints/product';

class ProductService {
  public createProduct = async ({ body, query }) => {
    return callApi({
      uriEndPoint: {
        ...productEndpoints.create,
      },
      query,
      body,
    }).catch((error: any) => {
      throw error;
    });
  };
  public updateProduct = async ({ body, query }) => {
    return callApi({
      uriEndPoint: {
        ...productEndpoints.updateProduct,
      },
      query,
      body,
    }).catch((error: any) => {
      throw error;
    });
  };
  public deleteSingleInventory = async ({ pathParams, body, query }) => {
    return callApi({
      uriEndPoint: {
        ...productEndpoints.deleteSingleProduct,
      },
      pathParams,
      query,
      body,
    }).catch((error: any) => {
      throw error;
    });
  };
  public deleteSingleAttribute = async ({ pathParams, body, query }) => {
    return callApi({
      uriEndPoint: {
        ...productEndpoints.deleteSingleAttribute,
      },
      pathParams,
      query,
      body,
    }).catch((error: any) => {
      throw error;
    });
  };
  public createAttribute = async ({ body, query }) => {
    return callApi({
      uriEndPoint: {
        ...productEndpoints.createAttribute,
      },
      query,
      body,
    }).catch((error: any) => {
      throw error;
    });
  };
  public updateAttribute = async ({ body, query }) => {
    return callApi({
      uriEndPoint: {
        ...productEndpoints.updateAttribute,
      },
      query,
      body,
    }).catch((error: any) => {
      throw error;
    });
  };
  public updateAttributeMany = async ({ body, query }) => {
    return callApi({
      uriEndPoint: {
        ...productEndpoints.updateAttributeMany,
      },
      query,
      body,
    }).catch((error: any) => {
      throw error;
    });
  };
  public getAttributes = async ({ body, query }) => {
    return callApi({
      uriEndPoint: {
        ...productEndpoints.getAttributes,
      },
      query,
      body,
    }).catch((error: any) => {
      throw error;
    });
  };
  public getInventory = async ({ body, query }) => {
    return callApi({
      uriEndPoint: {
        ...productEndpoints.getInventory,
      },
      body,
      query,
    }).catch((error: any) => {
      throw error;
    });
  };
}
export default ProductService;
