import express from 'express';
import * as wishlistController from '../controllers/wishlist.controller';
import { userCartAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to add book to cart
router.post('', userCartAuth, wishlistController.addToWishList);

export default router;