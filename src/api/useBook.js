import { useFetch, usePost } from '../utils/useReactQuery';
import { apiBaseUrl, getApiResponseData } from './constants';

export const useGetBooks = (paginate, filter) => {
    const { page, limit } = paginate;
    const { maxPrice, minPrice, sortBy, sortType, category } = filter;

    const result = useFetch(`${apiBaseUrl}/books`, { page, limit, maxPrice, minPrice, sortBy, sortType, category }, {});
    return getApiResponseData(result);
};

export const useGetBookDetail = (bookId) => {
    const result = useFetch(`${apiBaseUrl}/books/${bookId}`, {}, {});
    return getApiResponseData(result);
};

export const useGetBookFeedback = (bookId) => {
    const result = useFetch(`${apiBaseUrl}/feedback`, { bookId }, {});
    return getApiResponseData(result);
};

export const useGetBookCategories = () => {
    const result = useFetch(`${apiBaseUrl}/books/categories`, {}, {});
    return result?.data;
};

export const useAddBookToCart = (bookId, userId, data) =>{
    const result = usePost(`${apiBaseUrl}/users/${userId}/cart/${bookId}`, data, {});
    return result?.data;
}