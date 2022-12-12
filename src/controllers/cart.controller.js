import HttpStatus from 'http-status-codes';
import * as CartService from '../services/cart.service';

/**
 * Controller to add book to cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addBookToCart = async (req, res, next) => {
    try {
        const data = await CartService.addBookToCart(req.body);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Book added to cart successfully'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};

/**
 * Controller to remove book from cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const removeBookFromCart = async (req, res, next) => {
    try {
        const data = await CartService.removeBookFromCart(req.body);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Book removed from cart successfully'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};

/**
 * Controller to remove book from cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const removeBookQuantity = async (req, res, next) => {
    try {
        const data = await CartService.removeBookQuantity(req.body);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Book removed from cart successfully'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};