import { useFetch } from '../utils/useReactQuery';
import { apiBaseUrl, getApiResponseData } from './constants';

export const useGetCities = () => {
    const result = useFetch(`${apiBaseUrl}/address`, {}, {});
    return getApiResponseData(result);
};

export const useGetDistricts = (cityId) => {
    const result = useFetch(`${apiBaseUrl}/address/${cityId}`, {}, {});
    return getApiResponseData(result);
};

export const useGetWards = (cityId, districtId) => {
    const result = useFetch(`${apiBaseUrl}/address/${cityId}/${districtId}`, {}, {});
    return getApiResponseData(result);
};
