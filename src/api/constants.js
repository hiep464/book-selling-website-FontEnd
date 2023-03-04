export const apiBaseUrl = 'https://web-pj-be.fly.dev/api/v1';

/**
 *
 * @param {AxiosResponse} result
 * @returns
 */
export const getApiResponseData = (result) => {
    const { isError, isIdle, error } = result;
    if (isError) throw new Error('Error fetching data: ' + error);
    if (isIdle) throw new Error('Timeout fetching data');

    return result.data?.data;
};
