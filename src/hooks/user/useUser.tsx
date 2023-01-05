import { useMutation } from 'react-query';

import UserServices from '@/services/user/UserServices';

const { createUser, updateUser, getAllUsers, getStaff, getMyUser } =
  new UserServices();

export function useGetAllUsers() {
  return useMutation((payload: any) => getAllUsers(payload));
}
export function useGetStaff() {
  return useMutation((payload: any) => getStaff(payload));
}

export function useGetMyUser() {
  return useMutation(() => getMyUser());
}

export function useCreateUser() {
  return useMutation((data: any) => createUser(data));
}

export function useUpdateUser() {
  return useMutation(({ user, data }: any) => updateUser({ user, data }));
}
