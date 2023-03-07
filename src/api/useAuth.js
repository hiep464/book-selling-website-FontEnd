import { useMutation } from 'react-query';
import { useFetch, usePost } from '../utils/useReactQuery';
import { apiBaseUrl, getApiResponseData } from './constants';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useLogin = ({ onSuccess, onError }) => {
    const { login, logout } = useContext(AuthContext);

    const mutation = useMutation({
        mutationFn: async (authData) => {
            const { email, password } = authData;
            if (!email || !password) return false;

            const authResult = await axios.post(`${apiBaseUrl}/auth/signin`, { email, password });
            if (authResult.status >= 400) return false;

            const accessToken = authResult.data['access_token'];
            const userResult = await axios.get(`${apiBaseUrl}/auth/profile`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            if (userResult.status >= 400) return false;
            if (userResult.data.length === 0) return false;

            const user = userResult.data;
            login(user.id, accessToken, user.username);

            return true;
        },
        onSuccess,
        onError,
    });

    return mutation;
};

export const useLogout = () => {
    const { logout } = useContext(AuthContext);

    const mutation = useMutation({
        mutationFn: async () => {
            logout();
        },
    });

    return mutation;
};

const useRegister = () => {
    const mutation = useMutation({
        mutationFn: async (authData) => {
            const { email, password, username } = authData;
            if (!email || !password || !username) return false;

            const userResult = await axios.post(`/users`, { email, password, username });
            if (userResult.status !== 201) return false;

            return true;
        },
    });

    return mutation;
};
