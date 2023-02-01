import { boolean } from '@hapi/joi';
import Book from '../models/book.model';

//get all books
export const getAllBooks = async () => {
    // const data = await Book.find();
    // const data = await Book.find({ quantity: { $eq: 2 } }); //for lessThan
    // const data = await Book.find({ quantity: { $gt: 5 } }); //for greaterThan
    // const data = await Book.find().limit(5);
    // const data = await Book.find().skip(5);
    // const data = await Book.aggregate([{ $sort: { quantity: -1 } }]); // -1 for descending 1 for ascending
    // const data = await Book.aggregate([{ $count: "Number Of Books" }]);
    // const data = await Book.aggregate([{ $group: { _id: "Stock", totalStock: { $sum: "$quantity" } } }]);
    // const data = await Book.aggregate([{ $group: { _id: "AveragePrice", average: { $avg: "$price" } } }]);
    // const data = await Book.aggregate([{ $group: { _id: "MinimumPrice", minimum: { $min: "$price" } } }]); //$max for maximum
    // const data = await Book.aggregate([{ $match: { author: "Steve Tribe" } }]);
    // const data = await Book.aggregate([{ $match: { author: { $regex: "Steve tribe", $options: "i" } } }]);
    // const data = await Book.aggregate([{ $match: { $and: [{ author: "Steve Tribe" }, { bookName: "Sherlock: Chronicles" }] } }]);
    const data = await Book.aggregate([{ $match: { $or: [{ author: "Steve Tribe" }, { bookName: "Game of Thrones" }] } }]);
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