import express from 'express';
import * as customerController from '../controllers/customer.controller';
import { userCartAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to add customer details
router.post('', userCartAuth, customerController.addDetails);

export default router;