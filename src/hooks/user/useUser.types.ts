export interface LoginParams {
  email: string;
  password: string;
}

export interface User {
  _id: string;
  role: string;
  isVerified: boolean;
  type: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  primaryEmail: string;
}

export interface GetUserResponse {
  type: string;
  status: string;
  message: string;
  users: User[];
}
