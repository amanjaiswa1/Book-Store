import Cart from '../models/cart.model';
import Book from '../models/book.model';

//create a new user registration
export const addBookToCart = async (body) => {
    const findBook = await Book.findOne({ _id: body._id });
    let updateBookDetails = {
        productID: findBook._id,
        description: findBook.description,
        bookName: findBook.bookName,
        bookImage: findBook.bookImage,
        author: findBook.author,
        price: findBook.price
    };
    if (findBook != null) {
        const findCart = await Cart.findOne({ userID: body.userID });
        if (findCart != null) {
            const addBookInCart = await Cart.findOneAndUpdate(
                {
                    _id: findCart._id
                },
                { $push: { books: [updateBookDetails] } },
                {
                    new: true
                }
            );
            return addBookInCart;
        } else {
            const createNewCart = await Cart.create({ userID: body.userID, books: [updateBookDetails], cartTotal: findBook.price });
            return createNewCart;
        }
    } else {
        throw new Error("Book not found!!!")
    }
};