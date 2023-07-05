import { useEffect } from 'react';
import { useState } from 'react';
import './Form.css'

function Form() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
        const uppercaseRegExp = /(?=.*?[A-Z])/;
        const lowercaseRegExp = /(?=.*?[a-z])/;
        const digitsRegExp = /(?=.*?[0-9])/;
        const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
        const minLengthRegExp = /.{8,}/;

        const passwordLength = e.target.value.length;
        const uppercasePassword = uppercaseRegExp.test(e.target.value);
        const lowercasePassword = lowercaseRegExp.test(e.target.value);
        const digitsPassword = digitsRegExp.test(e.target.value);
        const specialCharPassword = specialCharRegExp.test(e.target.value);
        const minLengthPassword = minLengthRegExp.test(e.target.value);


        if (passwordLength === 0) {
            setPasswordError('Password is empty');
        } else if (!uppercasePassword) {
            setPasswordError('At least one Uppercase');
        } else if (!lowercasePassword) {
            setPasswordError('At least one Lowercase');
        } else if (!digitsPassword) {
            setPasswordError('At least one digit');
        } else if (!specialCharPassword) {
            setPasswordError('At least one Special Characters');
        } else if (!minLengthPassword) {
            setPasswordError('At least minumum 8 characters');
        } else {
            setPasswordError('');
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
            default:
                break
        }
    }
    return (
        <div className='form__wrapper'>
            <div>
                <form>
                    <h1>Registration</h1>
                    {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                    <label>Email</label>
                    <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type='text' placeholder='Enter your email....' />
                    {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
                    <label>Password</label>
                    <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type='password' placeholder='Enter your password....' />
                    <label>Confirm password</label>
                    <input type='password' placeholder='Confirm your password...'></input>
                    <button className='registerbtn' disabled={!formValid} type='submit'>Registration</button>
                </form>
            </div>
        </div>
    );
}

export default Form;