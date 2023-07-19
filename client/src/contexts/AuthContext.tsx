import authService, { User } from '../services/authService'
import useEffectOnce from '../hooks/useEffectOnce'
import React, { createContext, useContext, useCallback, ReactNode, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Cookies from 'universal-cookie'
import axios from 'axios';

type ContextState = {
    user?: User,
    signup: Function,
    signin: Function,
    signout: Function,
    getLoggedIn: Function
}
const authContext = createContext<ContextState>({
    signin: () => { },
    signup: () => { },
    signout: () => { },
    getLoggedIn: () => { }
})

type Props = {
    children: ReactNode
}

const AuthContextProvider = (props: Props) => {


    const [user, setUser] = useState<User>()
    const navigate = useNavigate()
    const cookie = new Cookies()

    const getUserInfo = useCallback(async () => {
        try {
            const res = await authService.getUserInfo()
            setUser(res.data)
        } catch (error) {
            navigate("/signin")
        }
    }, [navigate])

    // useEffectOnce(() => {
    //     if (!user) getUserInfo()
    // })

    const getLoggedIn = async () => {
        const loggedInRes = await axios.get("http://localhost:4000/api/users/");
        signin(loggedInRes.data)
    }

    useEffect(() => {
        getLoggedIn();
    }, []);


    const signup = async (user: User) => {
        try {
            const res = await authService.signup(user)

            const decoded = await jwtDecode(res.data.token)
            console.log(decoded)

            cookie.set("user-token", res.data.token, {
                expires: new Date((decoded as { exp: number }).exp * 1000)
            })

            setUser(res.data)
        } catch (error) {
            console.error("Sign Up Error -->", error)
        }
    }

    const signin = async (user: Partial<User>) => {
        try {
            const res = await authService.signin(user)
            const decoded = await jwtDecode(res.data.token)
            console.log(decoded)

            cookie.set("user-token", res.data.token, {
                expires: new Date((decoded as { exp: number }).exp * 1000)
            })

            setUser(res.data)
        } catch (error) {
            console.error("Sign In Error -->", error)
        }
    }

    const signout = () => {
        cookie.remove("user-token")
        setUser(undefined)
    }

    return (
        <authContext.Provider value={{ user, signin, signup, signout, getLoggedIn }}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthContextProvider

export const useAuth = () => useContext(authContext)