import React, { createContext, useCallback, useEffect } from 'react';

export const AuthContext = createContext({});

const storageKey = 'fahasa-auth';

/**
 * This is a provider for AuthContext.
 * It will handle the login and logout process.
 * You can use it like this: <AuthContextProvider>...</AuthContextProvider> and then you can use the AuthContext in your component.
 * For example: const { state, login, logout } = useContext(AuthContext);
 * state is an object that contains userId, token, username, isLogin.
 * login is a function that will set the userId, token, username, isLogin to true and save it to localStorage.
 * logout is a function that will set the userId, token, username, isLogin to false and remove it from localStorage.
 */
export const AuthContextProvider = ({ children }) => {
    const [userId, setUserId] = React.useState(null);
    const [isLogin, setIsLogin] = React.useState(false);
    const [token, setToken] = React.useState(null);
    const [username, setUsername] = React.useState(null);

    const login = useCallback((userId, token, username) => {
        setUserId(userId);
        setToken(token);
        setUsername(username);
        setIsLogin(true);
        localStorage.setItem(storageKey, JSON.stringify({ userId, token, username }));
    }, []);

    const logout = useCallback(() => {
        setUserId(null);
        setToken(null);
        setUsername(null);
        setIsLogin(false);
        localStorage.removeItem(storageKey);
    }, []);

    useEffect(() => {
        const authData = JSON.parse(localStorage.getItem(storageKey));
        if (authData && authData.userId && authData.token && authData.username) {
            login(authData.userId, authData.token, authData.username);
        } else {
            logout();
        }
    }, [login, logout]);

    return (
        <AuthContext.Provider
            value={{
                state: {
                    userId,
                    token,
                    username,
                    isLogin,
                },
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
