import { ChangeEvent, FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { User } from '../services/authService'
import React from 'react'
import './SignUp.css'

type Props = {}

const SignUp = (props: Props) => {
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

    const [confirmPassword, setConfitmPassword] = useState('')

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault()
        if (form.password.toString() !== confirmPassword.toString())
            return alert("Passwords doesn't match!!!")
        try {
            await signin(form)
            navigate('/')
            navigate(0)
        } catch (error) {
            console.log("SignIn Error -->", error)
        }
    }

    const { name, email, password } = form

    return (
        <div className='form_placer'>
            <div className='form-wrapper'>
                <form onSubmit={handleSubmit} className="form">
                    {/* <AppInput/> */}

                    {/* <AppInput/> */}


                    <h1 style={{ textAlign: 'center' }}>Registration</h1>

                    <label>Name</label>
                    <input value={name} name='name' type='text' placeholder='Enter your name....' />

                    <label>Email</label>
                    <input value={email} name='email' type='text' placeholder='Enter your email....' />

                    <label>Password</label>
                    <input value={password} name='password' type='password' placeholder='Enter your password....' />

                    {/* <AppButton/> */}

                    <label>Confirm password</label>
                    <input value={confirmPassword} name='confirmPassword' type='password' placeholder='Confirm your password...'></input>

                    <button className='registerbtn' type='submit'>REGISTER</button>
                </form>
            </div>
        </div>
    )

}

export default SignUp