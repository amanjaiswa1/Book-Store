import express from 'express';
import * as bookController from '../controllers/book.controller';

const router = express.Router();

//route to get all books
router.get('', bookController.getAllBooks);

//route to get book by _id
router.get('/:_id', bookController.getBookByID);

export default router;