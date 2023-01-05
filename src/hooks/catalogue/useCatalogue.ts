import { useMutation } from 'react-query';

import CatalogueService from '@/services/catalogue/CatalogueService';

const {
  createCatalogue,
  getAllCatalogue,
  getSingleCatalogue,
  updateSingleCatalogue,
  deleteSingleCatalogue,
} = new CatalogueService();

export function useCreateCatalogue() {
  return useMutation((payload: any) => createCatalogue(payload));
}

export function useUpdateSingleCatalogue() {
  return useMutation((payload: any) => updateSingleCatalogue(payload));
}

export function useDeleteSingleCatalogue() {
  return useMutation((payload: any) => deleteSingleCatalogue(payload));
}

export function useGetALLCatalogue() {
  return useMutation((payload: any) => getAllCatalogue(payload));
}

export function useGetSingleCatalogue() {
  return useMutation((payload: any) => getSingleCatalogue(payload));
}
