import { EndPoint } from '@/types/endpoints';

const catalogueEndpoints: EndPoint = {
  create: {
    uri: '/catalogue',
    method: 'POST',
    version: '/api',
  },
  updateSingle: {
    uri: '/catalogue/:id',
    method: 'PUT',
    version: '/api',
  },
  deleteSingle: {
    uri: '/catalogue/:id',
    method: 'DELETE',
    version: '/api',
  },
  getAll: {
    uri: '/catalogue',
    method: 'GET',
    version: '/api',
  },
  getSingle: {
    uri: '/catalogue/:id',
    method: 'GET',
    version: '/api',
  },
};

export default catalogueEndpoints;
