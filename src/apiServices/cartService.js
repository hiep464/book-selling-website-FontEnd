import * as Request from '../utils/request'

export const getCart = async (userId) => {
    const userCart = Request.get(`/users/${userId}/cart`);
    return userCart;
}
export const getBookInfo = async (bookId) => {
    const book = Request.get(`/books/${bookId}`);
    return book;
}