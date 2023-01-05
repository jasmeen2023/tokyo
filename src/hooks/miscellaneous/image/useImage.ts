import { useMutation } from 'react-query';

import ImageService from '@/services/miscilanious/image/ImageService';

const { imageUploadToAWS } = new ImageService();

export function useImageUploadToAWS() {
  return useMutation((file: any) => imageUploadToAWS(file));
}
