import { useFetch, usePost } from '../utils/useReactQuery';
import { apiBaseUrl, getApiResponseData } from './constants';

export const useCreateFeedback = (bookId, userId) => {
    const updater = (oldData, newData) => {
        return {
            ...newData,
            ...oldData,
        };
    };

    const mutate = usePost(`${apiBaseUrl}/feedback`, { bookId, userId }, updater);
    return (star, comment) => mutate({ star, comment });
};
