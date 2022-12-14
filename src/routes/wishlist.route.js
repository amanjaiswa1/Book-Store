import express from 'express';
import * as wishlistController from '../controllers/wishlist.controller';
import { userCartAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to add book to wishlist
router.post('', userCartAuth, wishlistController.addToWishList);

//route to remove book from wishlist
router.post('/removebook', userCartAuth, wishlistController.removeFromWishList);

export default router;