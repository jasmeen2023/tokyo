import { atom } from 'jotai';

export interface User {
  type: string;
  isVerified: boolean;
  role: string;
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;

  primaryEmail: string;
}

export type UserStatus = 'active' | 'inactive';

export interface CreateUserResponse {
  type: string;
  status: string;
  message: string;
  user: User;
}
// Create your atoms and derivatives
export const userAtom = atom<User | undefined>(undefined);
