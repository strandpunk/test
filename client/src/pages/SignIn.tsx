import { ChangeEvent, FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { User } from '../services/authService'
import React from 'react'

type Props = {}

const SignIn = (props: Props) => {
    const { signin } = useAuth()
    const navigate = useNavigate()

    const [form, setForm] = useState<User>({
        name: '',
        password: '',
        email: ''
    })

    const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault()
        try {
            await signin(form)
            navigate('/')
            navigate(0)
        } catch (error) {
            console.log("SignIn Error -->", error)
        }
    }

    const { email, password } = form
    return (
        <form onSubmit={handleSubmit} className="form">
  
        </form>

    )

}

export default SignIn