import Cart from '../models/cart.model';
import Book from '../models/book.model';

//create a new user registration
export const addBookToCart = async (body) => {
    const findBook = await Book.findOne({ _id: body._id });
    let bookMatchFound = false;
    let calculatePrice = 0;
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
            findCart.books.forEach(object => {
                if (object.productID == body._id) {
                    object.quantity += 1;
                    calculatePrice = object.price + findCart.cartTotal;
                    bookMatchFound = true;
                }
            });
            if (bookMatchFound == true) {
                const addBookInCart = await Cart.findOneAndUpdate(
                    {
                        _id: findCart._id
                    },
                    { books: findCart.books, cartTotal: calculatePrice },
                    {
                        new: true
                    }
                );
                return addBookInCart;
            }
            else {
                findCart.cartTotal += updateBookDetails.price;
                const addBookInCart = await Cart.findOneAndUpdate(
                    {
                        _id: findCart._id
                    },
                    { $push: { books: [updateBookDetails] }, cartTotal: findCart.cartTotal },
                    {
                        new: true
                    }
                );
                return addBookInCart;
            }
        } else {
            const createNewCart = await Cart.create({ userID: body.userID, books: [updateBookDetails], cartTotal: findBook.price });
            return createNewCart;
        }
    } else {
        throw new Error("Book not found!!!")
    }
};