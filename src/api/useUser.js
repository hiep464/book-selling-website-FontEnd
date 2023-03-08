import { useMutation } from 'react-query';
import { useFetch, usePost, useUpdate } from '../utils/useReactQuery';
import { apiBaseUrl, getApiResponseData } from './constants';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useGetProfile = (userId) => {
    const query = useFetch(`${apiBaseUrl}/users/${userId}`, {});
    return query.data;
};

export const useUpdateProfile = (userId, { onSuccess, onError }) => {
    const mutation = useMutation({
        mutationFn: async (profileData) => {
            const { name, phone, email, gender } = profileData;

            const result = await axios.patch(`${apiBaseUrl}/users/${userId}`, { name, phone, email, gender });
            if (result.status >= 400) return false;

            return true;
        },
        onSuccess,
        onError,
    });

    return mutation;
};
