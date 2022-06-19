import React, { useState, useContext, createContext, useEffect } from "react";
import axios from 'axios';

const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext);
}

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [token, setToken] = useState(null);
    const [tokenExpirationTime, setTokenExpirationTime] = useState();

    const setUserToken = (newToken, expirationTime) => {
        const expiration = expirationTime;

        setTokenExpirationTime(expiration);

        localStorage.setItem(
            'userData',
            JSON.stringify({
                token: newToken,
                expirationTime: expiration.toISOString()
            })
        );

        setToken(newToken);
    }

    const signup = (userData, account='courier') => axios({
        url: `/auth/new-${account}`,
        method: 'post',
        data: userData
    })
        .then(function (response) {
            console.log(response.data);
            !response.data ?
                alert("email already exists") :
                window.location.href = "http://localhost:3002/auth/signin";
        })
        .catch(function (error) {
            console.log(error);
        });


    const login = (userData) => {
        console.log(userData);
        return axios({
            url: '/auth/login',
            method: "post",
            data: userData
        })
            .then(res => {
                if (res.data._id !== null && res.data._id !== undefined) {
                    setUser(res.data);
                    setIsLoaded(true);
                    setUserToken(res.data._id + "@" + res.data.email, new Date(new Date().getTime() + 1000 * 60 * 60));
                } else {
                    alert("Username or Password incorrect!");
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const signout = () => {
        setUser(null);
        setToken(null);
        setIsLoaded(false);
        setTokenExpirationTime(null);
        localStorage.removeItem('userData');
        console.log(user)
        axios.get('/signout');
    }

    useEffect(() => {
        axios({
            method: "GET",
            url: "/getUser",
        }).then((res) => {
            if (res.data._id !== null && res.data._id !== undefined) {
                console.log(res.data);
                setUser(res.data);
                setIsLoaded(true);
                setUserToken(res.data._id + "@" + res.data.email, new Date(new Date().getTime() + 1000 * 60 * 60));
            } else {
                setTokenExpirationTime(null);
                localStorage.removeItem('userData');
                setUser(null);
                setIsLoaded(false);
                setToken(null);
            }

        })
            .catch(function (error) {
                console.log(error);
            });

    }, [])


    //hook to check if something is there in localStorage and logs user in accordingly
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (user) {
            if (storedData && storedData.token && new Date(storedData.expirationTime) > new Date()) {
                setUserToken(storedData.token, new Date(storedData.expirationTime));
            }
        } else {
            setTokenExpirationTime(null);
            localStorage.removeItem('userData'); 
            setIsLoaded(false);
            setToken(null);
        }
    }, [user]);

    //new useEffect hook to set the timer if the expiration time is in future otherwise we clear the timer here
    useEffect(() => {
        var logoutTimer;
        if (token && tokenExpirationTime) {
            const remainingTime = tokenExpirationTime.getTime() - new Date().getTime();
            logoutTimer = setTimeout(signout, remainingTime);
        } else {
            clearTimeout(logoutTimer);
        }
    });

    return {
        user,
        login,
        signup,
        token,
        isLoaded,
        setUserToken,
        signout
    };
}

