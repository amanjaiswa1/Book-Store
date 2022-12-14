import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import bookRoute from './book.route';
import cartRoute from './cart.route';
import wishlistRoute from './wishlist.route';
import customerRoute from './customer.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome!!! ::: Book Store Project :::');
  });
  router.use('/users', userRoute);
  router.use('/books', bookRoute);
  router.use('/carts', cartRoute);
  router.use('/wishlists', wishlistRoute);
  router.use('/customers', customerRoute);

  return router;
};

export default routes;