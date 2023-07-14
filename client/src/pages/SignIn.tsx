import { ChangeEvent, FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { User } from '../services/authService'

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
            window.location.reload()
        } catch (error) {
            console.log("SignIn Error -->", error)
        }
    }

    const { email, password } = form
    return {
        
    }

}

export default SignIn