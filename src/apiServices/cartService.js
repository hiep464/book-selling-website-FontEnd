import * as Request from '../utils/request'

export const getCart = async (userId) => {
    const userCart = await Request.get(`/users/${userId}/cart`);
    return userCart.data;
}

export const addToCart = async (bookId, userId, data) => {
    const res = Request.post(`/users/${userId}/cart/${bookId}`, data);
    return res;
}

export const updateCart = async (bookId, userId, data) => {
    const userCart = Request.update(`/users/${userId}/cart/${bookId}`, data);
    return userCart;
}

export const deleteItem = async (bookId, userId, data) => {
    const userCart = Request.remove(`/users/${userId}/cart/${bookId}`, data);
    return userCart;
}