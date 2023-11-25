import { User } from './user.interface';
import { UserModel } from './user.model';

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUserFromDB = async (userId: string) => {
  const result = await UserModel.findOne({ userId });
  return result;
};

// const getUpdateUserFromDB = async (userId: string, updatedData: any) => {
//   try {
//     const result = await UserModel.findOneAndUpdate({ userId }, updatedData, {
//       new: true,
//     });

//     return result;
//   } catch (error) {
//     throw new Error('Failed to update user information.');
//   }
// };

const deleteUserFromDB = async (userId: string) => {
  const result = await UserModel.updateOne({ userId }, { isDeleted: true });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  // getUpdateUserFromDB,
  deleteUserFromDB,
};
