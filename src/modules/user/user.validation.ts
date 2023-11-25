import { z } from 'zod';

// Define Zod schemas for subtypes

const FullnameSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const AddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

// Define Zod schema for the User

export const userValidation = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string().max(20),
  fullName: FullnameSchema,
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: AddressSchema,
  // orders: z.array(OrderSchema), // You can add an OrderSchema if needed
});

export default userValidation;
