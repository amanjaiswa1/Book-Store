import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { userCartAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to add book to cart
router.post('', userCartAuth, cartController.addBookToCart);

//route to remove book from cart
router.post('/removebook', userCartAuth, cartController.removeBookFromCart);

export default router;