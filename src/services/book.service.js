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

//get note by _id
export const getBookByID = async (_id) => {
    const data = await Book.findOne({ _id: _id });
    if (data != null) {
        return data;
    }
    else {
        throw new Error("Book is not available with this ID");
    }
};