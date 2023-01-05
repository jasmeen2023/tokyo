import { useMutation } from 'react-query';

import ProductService from '@/services/product/ProductService';

const {
  createProduct,
  getInventory,
  createAttribute,
  getAttributes,
  updateProduct,
  updateAttribute,
  updateAttributeMany,
  deleteSingleInventory,
  deleteSingleAttribute,
} = new ProductService();

export function useCreateProduct() {
  return useMutation((payload: any) => createProduct(payload));
}

export function useUpdateProduct() {
  return useMutation((payload: any) => updateProduct(payload));
}

export function useDeleteSingleInventory() {
  return useMutation((payload: any) => deleteSingleInventory(payload));
}

export function useDeleteSingleAttribute() {
  return useMutation((payload: any) => deleteSingleAttribute(payload));
}

export function useGetAttributes() {
  return useMutation((payload: any) => getAttributes(payload));
}

export function useCreateAttribute() {
  return useMutation((payload: any) => createAttribute(payload));
}

export function useUpdateAttribute() {
  return useMutation((payload: any) => updateAttribute(payload));
}

export function useUpdateAttributeMany() {
  return useMutation((payload: any) => updateAttributeMany(payload));
}

export function useGetInventory() {
  return useMutation((payload: any) => getInventory(payload));
}
