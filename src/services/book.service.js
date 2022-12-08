import { boolean } from '@hapi/joi';
import Book from '../models/book.model';

//get all books
export const getAllBooks = async () => {
    const data = await Book.find();
    if (data.length != 0) {
        return data;
    }
    else {
        throw new Error("No Books are available");
    }
};
