import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { Address, Fullname, TUser, UserModel } from './user.interface';
import config from '../../app/config';

const fullnameSchema = new Schema<Fullname>({
  firstName: {
    type: String,
    required: true,
    unique: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});
const addressSchema = new Schema<Address>({
  street: { type: String },
  city: { type: String },
  country: { type: String },
});

const userSchema = new Schema<TUser>({
  userId: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: fullnameSchema, required: true },
  age: { type: Number },
  email: { type: String, required: true },
  isActive: { type: Boolean },
  hobbies: [{ type: String }],
  address: { type: addressSchema },
});

// pre save middleware
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// post save middleware
userSchema.set('toJSON', {
  transform: function (doc, next) {
    delete next.password; // Remove the password field from the serialized document
    return next;
  },
});

userSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await User.findOne({ id });
  return existingUser;
};

export const User = model<TUser, UserModel>('User', userSchema);
