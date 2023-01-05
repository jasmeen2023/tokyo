import { EndPoint } from '@/types/endpoints';

const pingEndpoints: EndPoint = {
  pingServer: {
    uri: '/ping',
    method: 'GET',
    version: '/api',
  },
  testServer: {
    uri: '/test',
    method: 'GET',
    version: '/api',
  },
};

export default pingEndpoints;
