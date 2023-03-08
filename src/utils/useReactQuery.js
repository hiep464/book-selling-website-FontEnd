import { useMutation, useQuery, useQueryClient } from 'react-query';
import { api } from './api';

/**
 * Fetch data from api
 * @param {string | null} url
 * @param {object} params
 * @param {UseQueryOptions<T, Error, T, QueryKeyT>} config
 * @returns T
 */
export const useFetch = (url, params, config) => {
    const context = useQuery([url, params], ({ queryKey }) => fetcher({ queryKey }), {
        enabled: !!url,
        ...config,
    });

    return context;
};

/**
 *
 * @param {QueryFunctionContext<QueryKeyT>} param0
 * @returns Promise<T>
 */
export const fetcher = ({ queryKey, pageParam }) => {
    const [url, params] = queryKey;
    return api.get(url, { params: { ...params, pageParam } }).then((res) => res.data);
};

/**
 *
 * @param {(data: T | S) => Promise<AxiosResponse<S>>} func
 * @param {string} url
 * @param {object?} params
 * @param {((oldData: T, newData: S) => T) | undefined} updater
 * @returns
 */
const useGenericMutation = (func, url, params, updater) => {
    const queryClient = useQueryClient();

    return useMutation(func, {
        onMutate: async (data) => {
            await queryClient.cancelQueries([url, params]);

            const previousData = queryClient.getQueryData([url, params]);

            queryClient.setQueryData([url, params], (oldData) => {
                return updater ? updater(oldData, data) : data;
            });

            return previousData;
        },
        onError: (err, _, context) => {
            queryClient.setQueryData([url, params], context);
        },
        onSettled: () => {
            queryClient.invalidateQueries([url, params]);
        },
    });
};

/**
 * @param {string} url
 * @param {object?} params
 * @param {((oldData: T, id: string | number) => T) | undefined} updater
 */
export const useDelete = (url, params, updater) => {
    return useGenericMutation((id) => api.delete(`${url}/${id}`), url, params, updater);
};

/**
 *
 * @param {string} url
 * @param {object?} params
 * @param {((oldData: T, newData: S) => T)?} updater
 * @returns
 */
export const usePost = (url, params, updater) => {
    return useGenericMutation((data) => api.post(url, data), url, params, updater);
};

/**
 *
 * @param {string} url
 * @param {object?} params
 * @param {((oldData: T, newData: S) => T)?} updater
 * @returns
 */
export const useUpdate = (url, params, updater) => {
    return useGenericMutation((data) => api.patch(url, data), url, params, updater);
};
