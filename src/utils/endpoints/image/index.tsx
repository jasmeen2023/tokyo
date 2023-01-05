import { EndPoint } from '@/types/endpoints';

const imageEndpoints: EndPoint = {
  imageUploadToAWS: {
    uri: '/image/uploadtoaws',
    method: 'POST',
    version: '/api',
  },
};

export default imageEndpoints;
