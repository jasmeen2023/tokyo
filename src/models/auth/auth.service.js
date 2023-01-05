import httpStatus from 'http-status';

import { getRoleInitials, matchRole, roles } from '@/utils/config/roles';
import ApiError from '@/utils/errors/ApiError';
import makeid from '@/utils/UIDs';

import Auth from './auth.model';
import { generateAuthTokens } from '../token/token.service';

export const createAuthId = async (authRole) => {
  let finalUID = '';
  const matchingRole = matchRole(authRole);
  const role = roles.includes(matchingRole.toLowerCase());
  if (!role) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `${authRole} type doesn't exist`
    );
  }

  const initials = getRoleInitials(matchingRole);

  while (!finalUID) {
    const tempId = initials + makeid(5);
    const auth = await Auth.find({ authId: tempId });
    if (!auth) {
      continue;
    }
    finalUID = tempId;
    break;
  }

  return finalUID;
};

/**
 * Create a auth
 * @param {NewCreatedAuth} authBody
 * @returns {Promise<IAuthDoc>}
 */
export const createAuth = async (authBody) => {
  // if (await Auth.isPhoneTaken(authBody.phone)) {
  //   throw new ApiError(
  //     httpStatus.BAD_REQUEST,
  //     `${authBody.phone} already taken`
  //   );
  // }
  if (authBody.phone) {
    const auth = Auth.create({
      authMode: 'phone',
      authId: authBody.phone,
      ...authBody,
    }).catch((e) => {
      console.log(e);
      return false;
    });
  }
  if (authBody.email) {
    const auth = Auth.create({
      authMode: 'email',
      authId: authBody.email,
      ...authBody,
    }).catch((e) => {
      console.log(e);
      return false;
    });
  }

  return true;
};
export const loginAuth = async (authBody) => {
  // if (await Auth.isPhoneTaken(authBody.phone)) {
  //   throw new ApiError(
  //     httpStatus.BAD_REQUEST,
  //     `${authBody.phone} already taken`
  //   );
  // }

  const auth = await getAuthByEmail(authBody.key);
  const isMatch = await auth.isPasswordMatch(authBody.password);
  if (!isMatch) {
    throw new ApiError(httpStatus.BAD_REQUEST, `authentication error`);
  }

  const tokens = await generateAuthTokens(auth);

  return { ...auth.toObject(), ...tokens };
};

/**
 * Register a auth
 * @param {NewRegisteredAuth} authBody
 * @returns {Promise<IAuthDoc>}
 */
export const registerAuth = async (authBody) => {
  if (await Auth.isPhoneTaken(authBody.phone)) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `${authBody.phone} already taken`
    );
  }
  return Auth.create(authBody);
};

/**
 * Query for auths
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @returns {Promise<QueryResult>}
 */
export const queryAuths = async (keyword, preference) => {
  const preferenceList =
    !preference || preference === 'all'
      ? [
          { srno: Number(keyword) },
          { name: { $regex: new RegExp(keyword, 'i') } },
          { aadharNumber: { $regex: new RegExp(keyword, 'i') } },
          { phone: { $regex: new RegExp(keyword, 'i') } },
        ]
      : [
          preference === 'srno'
            ? { srno: Number(keyword) }
            : { [preference]: { $regex: new RegExp(keyword, 'i') } },
        ];

  const test = await Auth.aggregate([
    {
      $match: {
        $or: preferenceList,
      },
    },
    { $limit: 4 },
    {
      $lookup: {
        from: 'storages',
        let: {
          id: '$_id',
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  {
                    $eq: ['$auth', '$$id'],
                  },
                ],
              },
            },
          },
        ],
        as: 'storage',
      },
    },
    {
      $unwind: {
        path: '$storage',
        includeArrayIndex: 'string',
        preserveNullAndEmptyArrays: true,
      },
    },
    { $project: { password: 0 } },
  ]);

  return test;
};

/**
 * Get auth by id
 * @param {mongoose.Types.ObjectId} id
 * @returns {Promise<IAuthDoc | null>}
 */
export const getAuthById = async (id) => Auth.findById(id);

export const getAuthByIdWithStorage = async (id) => {
  const test = await Auth.aggregate([
    {
      $match: {
        _id: id,
      },
    },
    {
      $lookup: {
        from: 'storages',
        let: {
          id: '$_id',
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  {
                    $eq: ['$auth', '$$id'],
                  },
                ],
              },
            },
          },
        ],
        as: 'storage',
      },
    },
    {
      $unwind: {
        path: '$storage',
        includeArrayIndex: 'string',
        preserveNullAndEmptyArrays: true,
      },
    },
    { $project: { password: 0 } },
  ]);

  return test.length ? test[0] : [];
};

/**
 * Get auth by email
 * @param {string} phone
 * @returns {Promise<IAuthDoc | null>}
 */
export const getAuthByEmail = async (key) =>
  Auth.findOne({
    $or: [{ phone: RegExp(`${key}`, 'i') }, { uId: RegExp(key, 'i') }],
  });

/**
 * Update auth by id
 * @param {mongoose.Types.ObjectId} authId
 * @param {UpdateAuthBody} updateBody
 * @returns {Promise<IAuthDoc | null>}
 */
export const updateAuthById = async (authId, updateBody) => {
  const auth = await getAuthById(authId);
  if (!auth) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Auth not found');
  }
  if (updateBody.phone && (await Auth.isPhoneTaken(updateBody.phone, authId))) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `${updateBody.phone} already taken`
    );
  }
  Object.assign(auth, updateBody);
  await auth.save().catch((error) => {
    console.log(error);
  });
  return auth;
};

/**
 * Delete auth by id
 * @param {mongoose.Types.ObjectId} authId
 * @returns {Promise<IAuthDoc | null>}
 */
export const deleteAuthById = async (authId) => {
  const auth = await getAuthById(authId);
  if (!auth) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Auth not found');
  }
  await auth.remove();
  return auth;
};
