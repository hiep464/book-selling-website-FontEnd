import React, { createContext, useCallback } from 'react';

export const AuthContext = createContext({});

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
    }, []);

    const logout = useCallback(() => {
        setUserId(null);
        setToken(null);
        setUsername(null);
        setIsLogin(false);
    }, []);

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
