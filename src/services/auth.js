import { UserCollection } from '../db/models/User.js';

export const registerUser = async (payload) => {
  const newUser = await UserCollection.create(payload);

  return newUser;
};
