import { useMutation } from 'react-query';

import AuthServices from '@/services/auth/AuthServices';

import { LoginData } from '../auth/login/useLogin.types';
const { login } = new AuthServices();

export function useLogin() {
  return useMutation((payload: LoginData) => login(payload));
}
