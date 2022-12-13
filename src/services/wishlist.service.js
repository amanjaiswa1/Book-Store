import Wishlist from '../models/wishlist.model';
import Book from '../models/book.model';

//add book to the wishlist
export const addToWishList = async (body) => {
    const findBook = await Book.findOne({ _id: body._id });
    let bookMatchFound = false;
    let updateBookDetails = {
        productID: findBook._id,
        description: findBook.description,
        bookName: findBook.bookName,
        bookImage: findBook.bookImage,
        author: findBook.author,
        price: findBook.price
    }
    if (findBook != null) {
        const findWishlist = await Wishlist.findOne({ userID: body.userID });
        if (findWishlist != null) {
            findWishlist.books.forEach(object => {
                if (object.productID == body._id) {
                    bookMatchFound = true;
                }
            });
            if (bookMatchFound == true) {
                const addToWishList = await Wishlist.findOneAndUpdate(
                    {
                        _id: findWishlist._id
                    },
                    { books: findWishlist.books },
                    {
                        new: true
                    }
                );
                return addToWishList;
            } else {
                const addToWishList = await Wishlist.findByIdAndUpdate(
                    {
                        _id: findWishlist._id
                    },
                    {
                        $push: { books: [updateBookDetails] }
                    },
                    {
                        new: true
                    }
                );
                return addToWishList;
            }
        }
        else {
            const createNewWishlist = await Wishlist.create({ userID: body.userID, books: [updateBookDetails] });
            return createNewWishlist;
        }
    } else {
        throw new Error("Book not found!!!")
    }
};