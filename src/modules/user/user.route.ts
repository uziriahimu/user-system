import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/create-student', UserControllers.createUser);

router.get('/', UserControllers.getAllUsers);

router.get('/:UserId', UserControllers.getSingleUser);

export const UserRoutes = router;
