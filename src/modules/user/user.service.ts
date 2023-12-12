import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (user: TUser) => {
  const result = await User.create(user);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await User.find();
  return result;
};

const getSingleUserFromDB = async (userId: string) => {
  const result = await User.findOne({ userId });
  return result;
};

const getUpdateUserFromDB = async (
  userId: string,
  userData: TUser,
): Promise<TUser | null> => {
  const result = await User.findOneAndUpdate(
    { userId },
    { ...userData },
    { new: true },
  );

  return result;
};

const deleteUserFromDB = async (userId: string) => {
  const result = await User.findOneAndDelete({ userId }, { isDeleted: true });
  return result;
};

const createOrderIntoDB = async (userId: string) => {
  const result = await User.findOneAndUpdate({ userId });
  return result;
};

const getOrderIntoDB = async (userId: string) => {
  const result = await User.findOne({ userId });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  getUpdateUserFromDB,
  deleteUserFromDB,
  createOrderIntoDB,
  getOrderIntoDB,
};
