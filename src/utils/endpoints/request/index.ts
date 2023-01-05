import { EndPoint } from '@/types/endpoints';

const requestEndpoints: EndPoint = {
  getSingleRequests: {
    uri: '/wallet/request/:id',
    method: 'GET',
    version: '/api',
  },
  getAllRequests: {
    uri: '/wallet/allRequests',
    method: 'GET',
    version: '/api',
  },
};

export default requestEndpoints;
