import { Model } from 'mongoose';

export type Fullname = {
  firstName: string;
  lastName: string;
};

export type Address = {
  street: string;
  city: string;
  country: string;
};

// export type Orders = {
//   productName: string;
//   price: number;
//   quantity: number;
// }[];

export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: Fullname;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: Address;
  //   orders: Orders;
};

export interface UserModel extends Model<TUser> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(id: string): Promise<TUser | null>;
}
