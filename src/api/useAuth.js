import { useMutation } from 'react-query';
import { useFetch, usePost } from '../utils/useReactQuery';
import { apiBaseUrl, getApiResponseData } from './constants';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

/**
 * A custom hook that uses the useMutation hook from react-query to perform a login operation.
 * @param {(((data: boolean, variables: void, context: unknown) => void | Promise<unknown>) | undefined)?} onSuccess - A callback function to be called on successful login.
 * @param {(((error: unknown, variables: void, context: unknown) => void | Promise<unknown>) | undefined)?} onError - A callback function to be called if an error occurs during login.
 * @returns {Object} - The mutation object returned by the useMutation hook.
 */
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
            login(user.id, accessToken, user.email);

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

export const useRegister = ({ onSuccess, onError }) => {
    const { login } = useContext(AuthContext);
    const mutation = useMutation({
        mutationFn: async (authData) => {
            const { email, password } = authData;
            if (!email || !password) return false;
            const name = '';
            const role = 'USER';
            const gender = 'MALE';
            const phone = '';
            const userResult = await axios.post(`${apiBaseUrl}/user`, { email, name, password, role, gender, phone });
            console.log(userResult);
            if (userResult.status !== 201) return false;
            if (userResult.data.length === 0) return false;

            const authResult = await axios.post(`${apiBaseUrl}/auth/signin`, { email, password });
            if (authResult.status >= 400) return false;
            const accessToken = authResult.data['access_token'];
            console.log(authResult);
            const user = userResult.data;
            login(user.id, accessToken, name);
            return true;
        },
        onSuccess,
        onError,
    });

    return mutation;
};
