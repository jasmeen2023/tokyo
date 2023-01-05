import mongoose, { Document, Model } from 'mongoose';

import { AccessAndRefreshTokens } from '@/models/token/token.interfaces';
import { QueryResult } from '@/utils/paginate/paginate';

export interface IUser {
  name: string;
  uId: string;
  // email: string;
  phone: string;
  password: string;
  role?: string;
  // isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
}

export interface IUserDoc extends IUser, Document {
  isPasswordMatch(password: string): Promise<boolean>;
}

export interface IUserModel extends Model<IUserDoc> {
  // isEmailTaken(email: string, excludeUserId?: mongoose.Types.ObjectId): Promise<boolean>;
  isPhoneTaken(
    phone: string,
    excludeUserId?: mongoose.Types.ObjectId
  ): Promise<boolean>;
  paginate(
    filter: Record<string, any>,
    options: Record<string, any>
  ): Promise<QueryResult>;
}

export type UpdateUserBody = Partial<IUser>;

export type NewRegisteredUser = Omit<
  IUser,
  | 'role'
  // | 'isEmailVerified'
  | 'isPhoneVerified'
  | 'email'
>;

// export type NewCreatedUser = Omit<IUser, 'isEmailVerified' | 'isPhoneVerified'>;
export type NewCreatedUser = Omit<IUser, 'isPhoneVerified'>;

export interface IUserWithTokens {
  user: IUserDoc;
  tokens: AccessAndRefreshTokens;
}
