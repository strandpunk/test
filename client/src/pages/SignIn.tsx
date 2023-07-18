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
    
    const {email, password} = form
    return (
        <div className='form-wrapper'>
            <form onSubmit={handleSubmit} className=" my-12 h-2/5 flex w-3/12 flex-col gap-8 bg-slate-300">
                {/* <AppInput/> */}
                <input
                    required
                    value={email}
                    placeholder='Email'
                    name='email'
                    title='Email'
                    type={'email'}
                    onChange={handleFormChange}
                />

                {/* <AppInput/> */}
                <input
                    required
                    value={password}
                    placeholder='Password'
                    name='password'
                    title='password'
                    type={'password'}
                    onChange={handleFormChange}
                />
                
                {/* <AppButton/> */}
                <button/>
            </form>
        </div>

    )

}

export default SignIn