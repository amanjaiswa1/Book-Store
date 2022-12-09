import Cart from '../models/cart.model';
import Book from '../models/book.model';

//create a new user registration
export const addBookToCart = async (body) => {
    const findBook = await Book.findOne({ _id: body._id });
    if (findBook != null) {
        const findCart = await Cart.findOne({ userID: body.userID });
        if (findCart != null) {
            const addBookInCart = await Cart.findOneAndUpdate(
                {
                    _id: findCart._id
                },
                {
                    $push: { books: { productID: findBook._id } }
                },
                {
                    new: true
                });
            return addBookInCart;
        } else {
            const createNewCart = await Cart.create({ userID: body.userID });
            const addBookInCart = await Cart.findOneAndUpdate(
                {
                    userID: body.userID
                },
                {
                    $push: { books: { productID: findBook._id } }
                },
                {
                    new: true
                });
            return addBookInCart;
        }
    } else {
        throw new Error("Book not found!!!")
    }
};