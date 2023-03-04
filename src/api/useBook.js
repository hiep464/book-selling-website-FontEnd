import { useFetch } from '../utils/useReactQuery';
import { apiBaseUrl, getApiResponseData } from './constants';

export const useGetBooks = (paginate, filter) => {
    const { page, limit } = paginate;
    const { maxPrice, minPrice, sortBy, sortOrder } = filter;

    const result = useFetch(`${apiBaseUrl}/books`, { page, limit, maxPrice, minPrice, sortBy, sortOrder }, {});
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
