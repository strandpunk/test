import { ChangeEvent, FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { User } from '../services/authService'
import React from 'react'
import './SignIn.css'

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
        <div className='form_placer'>
            <div className='form-wrapper'>
                <form onSubmit={handleSubmit} className="form">
                    {/* <AppInput/> */}

                    {/* <AppInput/> */}

                    <h1 style={{ textAlign: 'center' }}>Enter</h1>
                    <label>Email</label>
                    <input onChange={handleFormChange} value={email} name='email' type='text' placeholder='Enter your email....' />

                    {/* <AppButton/> */}

                    <label>Password</label>
                    <input onChange={handleFormChange} value={password} name='password' type='password' placeholder='Enter your password...'></input>
                    <button className='registerbtn' type='submit'>ENTER</button>
                </form>
            </div>
        </div>
    )

}

export default SignIn