import { Request, Response } from 'express';
import { UserServices } from './user.service';
import userValidation from './user.validation';
// import { UserModel } from './user.model';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const zodParsedData = userValidation.parse(userData);
    const result = await UserServices.createUserIntoDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'user is created succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();

    res.status(200).json({
      success: true,
      message: 'Users are retrieved succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await UserServices.getSingleUserFromDB(userId);

    res.status(200).json({
      success: true,
      message: 'User is retrieved succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

// const updateUser = async (req: Request, res: Response) => {
//   try {
//     const { userId } = req.params;
//     const userDataToUpdate = req.body; // Updated user data

//     const updatedUser = await UserServices.getUpdateUserFromDB(
//       userId,
//       userDataToUpdate,
//     );

//     if (!updatedUser) {
//       return res.status(404).json({
//         success: false,
//         message: 'User not found. Cannot update information.',
//       });
//     }

//     // Omitting password field from the response
//     // const { password, ...responseData } = updatedUser.toObject();

//     res.status(200).json({
//       success: true,
//       message: 'User updated successfully!',
//       data: userDataToUpdate,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: 'Failed to update user information.',
//       error: err.message,
//     });
//   }
// };
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await UserServices.deleteUserFromDB(userId);

    res.status(200).json({
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  // updateUser,
  deleteUser,
};
