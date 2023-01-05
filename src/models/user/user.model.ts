/* eslint-disable @typescript-eslint/no-this-alias */
import { model, models, Schema } from 'mongoose';

import { roles } from '@/utils/config/roles';
import paginate from '@/utils/paginate/paginate';
import toJSON from '@/utils/toJSON/toJSON';

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      enum: roles,
      default: 'customer',
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    isPhoneVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} phone - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
// userSchema.static('isPhoneTaken', async function (phone, excludeUserId) {
//   const user = await this.findOne({ phone, _id: { $ne: excludeUserId } });
//   return !!user;
// });

const User = models.User || model('User', userSchema);

export default User;
