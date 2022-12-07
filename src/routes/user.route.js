import express from 'express';
import * as userController from '../controllers/user.controller';
import { registrationValidator, loginValidator } from '../validators/user.validator';

const router = express.Router();

//route to create a new user registration
router.post('', registrationValidator, userController.registration);

//route to login user
router.post('/login', loginValidator, userController.login);

//route to forgot user password
router.post('/forgotpassword', userController.forgotPassword);

export default router;