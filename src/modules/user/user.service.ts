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

// const getUpdateUserFromDB = async (
//   id: string,
//   userData: TUser,
// ): Promise<TUser | null> => {
//   const result = await UserModel.findByIdAndUpdate(id, userData, {
//     new: true,
//     runValidators: true,
//   });

//   return result;
// };

// const deleteUserFromDB = async (userId: string) => {
//   const result = await UserModel.updateOne({ userId }, { isDeleted: true });
//   return result;
// };

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  // getUpdateUserFromDB,
  // deleteUserFromDB,
};
