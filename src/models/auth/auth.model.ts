/* eslint-disable @typescript-eslint/no-this-alias */
import bcrypt from 'bcryptjs';
import { model, models, Schema } from 'mongoose';

import paginate from '@/utils/paginate/paginate';
import toJSON from '@/utils/toJSON/toJSON';

const authSchema = new Schema(
  {
    authMode: {
      type: String,
      enum: ['email', 'phone'],
      required: true,
    },
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    authId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      validate(value: string) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error(
            'Password must contain at least one letter and one number'
          );
        }
      },
      private: true, // used by the toJSON plugin
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
authSchema.plugin(toJSON);
authSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} phone - The auth's email
 * @param {ObjectId} [excludeAuthId] - The id of the auth to be excluded
 * @returns {Promise<boolean>}
 */
// authSchema.static('isPhoneTaken', async function (phone, excludeAuthId) {
//   const auth = await this.findOne({ phone, _id: { $ne: excludeAuthId } });
//   return !!auth;
// });

/**
 * Check if password matches the auth's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
authSchema.method('isPasswordMatch', async function (password) {
  const auth = this;
  return bcrypt.compare(password, auth.password);
});

authSchema.pre('save', async function (next) {
  const auth = this;
  if (auth.isModified('password')) {
    auth.password = await bcrypt.hash(auth.password, 8);
  }
  next();
});

const Auth = models.Auth || model('Auth', authSchema);

export default Auth;
