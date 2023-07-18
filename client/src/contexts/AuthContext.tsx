import authService, { User } from '../services/authService'
import { useEffectOnce } from 'usehooks-ts'
import React, { createContext, useContext, useCallback, ReactNode, useState } from "react"
import { useNavigate } from "react-router-dom";

type ContextState = {
    user?: User,
    signup: Function,
    signin: Function,
    signout: Function,
}
const authContext = createContext<ContextState>({
    signin: () => { },
    signup: () => { },
    signout: () => { },
})

type Props = {
    children: ReactNode
}

const AuthContextProvider = (props: Props) => {

    const [user, setUser] = useState<User>()
    const navigate = useNavigate()

    const getUserInfo = useCallback(async () => {
        try {
            const res = await authService.getUserInfo()
            setUser(res.data)
        } catch (error) {
            navigate("/signin")
        }
    }, [navigate])

    useEffectOnce(() => {
        if (!user) getUserInfo()
    })

    const signup = async (user: User) => {
        try {
            const res = await authService.signup(user)
            localStorage.setItem("user-token", res.data.token)
            setUser(res.data)
        } catch (error) {
            console.error("Sign Up Error -->", error)
        }
    }

    const signin = async (user: Partial<User>) => {
        try {
            const res = await authService.signin(user)
            localStorage.setItem("user-token", res.data.token)
            setUser(res.data)
        } catch (error) {
            console.error("Sign In Error -->", error)
        }
    }

    const signout = () => {
        localStorage.removeItem("user-token")
        setUser(undefined)
    }

    return (
        <authContext.Provider value={{ user, signin, signup, signout }}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthContextProvider

export const useAuth = () => useContext(authContext)