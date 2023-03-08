import { useFetch, usePost } from '../utils/useReactQuery';
import { apiBaseUrl, getApiResponseData } from './constants';

export const useGetOrder = (userId) => {
    const result = useFetch(`${apiBaseUrl}/orders/${userId}`, {}, {});
    return getApiResponseData(result);
};

// export const useCheckout = (request) => {
//     const result = usePost(`${apiBaseUrl}/orders/checkout`, { request }, {});
//     return;
// };
