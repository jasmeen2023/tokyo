import { EndPoint } from '@/types/endpoints';

const productEndpoints: EndPoint = {
  create: {
    uri: '/inventory/product',
    method: 'POST',
    version: '/api',
  },
  updateProduct: {
    uri: '/inventory/product',
    method: 'PUT',
    version: '/api',
  },
  deleteSingleProduct: {
    uri: '/inventory/product/:id',
    method: 'DELETE',
    version: '/api',
  },
  deleteSingleAttribute: {
    uri: '/inventory/attribute/:id',
    method: 'DELETE',
    version: '/api',
  },
  createAttribute: {
    uri: '/inventory/attribute',
    method: 'POST',
    version: '/api',
  },
  updateAttribute: {
    uri: '/inventory/attribute',
    method: 'PUT',
    version: '/api',
  },
  updateAttributeMany: {
    uri: '/inventory/attributeMany',
    method: 'PUT',
    version: '/api',
  },
  getAttributes: {
    uri: '/inventory/attribute',
    method: 'GET',
    version: '/api',
  },
  getInventory: {
    uri: '/inventory',
    method: 'GET',
    version: '/api',
  },
};

export default productEndpoints;
