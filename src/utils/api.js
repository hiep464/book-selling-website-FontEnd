import axios from 'axios';

/**
 * Utils for api calls
 * Todo: using axios as http client library and js-cookie for token management
 */
export const api = {
    /**
     * @param {string} url
     * @param {object?} params
     * @returns Promise<T>
     */
    get: (url, params) =>
        axios.get(url, {
            headers: {
                // token: Cookies.get('token'),
            },
            ...params,
        }),

    /**
     * @param {string} url
     * @param {any} data
     * @returns Promise<T>
     */
    post: (url, data) =>
        axios.post(url, data, {
            headers: {
                // token: Cookies.get('token'),
            },
        }),
    /**
     * @param {string} url
     * @param {any} data
     * @returns Promise<T>
     */
    patch: (url, data) =>
        axios.patch(url, data, {
            headers: {
                // token: Cookies.get('token'),
            },
        }),
    /**
     * @param {string} url
     * @returns Promise<T>
     */
    delete: (url) =>
        axios.delete(url, {
            headers: {
                // token: Cookies.get('token'),
            },
        }),
};
