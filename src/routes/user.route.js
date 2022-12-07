import express from 'express';
import * as userController from '../controllers/user.controller';
import { registrationValidator } from '../validators/user.validator';

const router = express.Router();

//route to create a new user registration
router.post('', registrationValidator, userController.registration);

export default router;