import { useEffect } from 'react';
import { useState } from 'react';
import './Form.css'

function Form() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Поле почты не может быть пустым')
    const [passwordError, setPasswordError] = useState('Поле пароля не может быть пустым')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])
 
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректная почта')
            if (!e.target.value) {
                setEmailError('Поле почты не может быть пустым')
            }
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 4 || e.target.value.length > 8) {
            setPasswordError('Пароль должен быть длиннее 4 и короче 8')
            if (!e.target.value) {
                setPasswordError('Поле пароля не может быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }
    return (
        <div className='form__wrapper'>
            <div>
                <form>
                    <h1>Registration</h1>
                    {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                    <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type='text' placeholder='Enter your email....' />
                    {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
                    <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type='password' placeholder='Enter your password....' />
                    <button className='registerbtn' disabled={!formValid} type='submit'>Registration</button>
                </form>
            </div>
        </div>
    );
}

export default Form;