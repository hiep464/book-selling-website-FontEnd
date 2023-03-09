export const apiBaseUrl = 'https://web-pj-be.fly.dev/api/v1';
// export const apiBaseUrl =
//     process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api/v1' : 'https://web-pj-be.fly.dev/api/v1';

export const getApiResponseData = (result) => {
    const { isError, isIdle, error } = result;
    if (isError) throw new Error('Error fetching data: ' + error);
    if (isIdle) throw new Error('Timeout fetching data');

    return result?.data;
};
