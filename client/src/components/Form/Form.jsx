import { useState } from 'react';
import './Form.css'

function Form() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    const [emailError, setEmailError] = useState('Поле почты не может быть пустым')
    const [passwordError, setPasswordError] = useState('Поле пароля не может быть пустым')
    const [confirmPasswordError, setConfirmPasswordError] = useState('Это поле не может быть пустым')

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

    const confirmPasswordHandler = (e) => {

        setConfirmPassword(e.target.value)

        if (e.target.value.length === 0) {
            setConfirmPasswordError('Это поле не может быть пустым');
        } else (
            setConfirmPasswordError('')
        )
    }


    //-----------------------------------------------------------------
    const postData = async (url = '', data = {}) => {
        // Формируем запрос
        const response = await fetch(url, {
            // Метод, если не указывать, будет использоваться GET
            method: 'POST',
            // Заголовок запроса
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '<origin>',
            },
            // Данные
            body: JSON.stringify(data)
        });
        return response.json();
    }


    const Pass = (e) => {
        if (confirmPassword.length === 0) {
            setConfirmPasswordError('Это поле не может быть пустым')
        } else {
            if (confirmPassword !== password) {
                setConfirmPasswordError('Пароли не совпали')
            } else {
                setConfirmPasswordError('')

                postData('http://localhost:4000',
                    {
                        email: email,
                        password: password
                    })

                    .then((data) => {
                        console.log(data);
                    });
            }
        }
    }

    const Check = (e) => {
        postData('http://localhost:4000/post',
            {
                email: 'email',
                password: 'password'
            })

            .then(() => {
                console.log('1');
            });
    }






    return (
        <div className='form__wrapper'>
            <div>
                <form>
                    <h1>Registration</h1>
                    <label>Email</label>
                    <input onChange={e => emailHandler(e)} value={email} name='email' type='text' placeholder='Enter your email....' />
                    <div style={{ color: 'red', marginBottom: '40px' }}>{emailError}</div>
                    <label>Password</label>
                    <input onChange={e => passwordHandler(e)} value={password} name='password' type='password' placeholder='Enter your password....' />
                    <div style={{ color: 'red', marginBottom: '40px' }}>{passwordError}</div>
                    <label>Confirm password</label>
                    <input onChange={e => confirmPasswordHandler(e)} value={confirmPassword} name='confirmPassword' type='password' placeholder='Confirm your password...'></input>
                    <div style={{ color: 'red', marginBottom: '40px' }}>{confirmPasswordError}</div>
                    <button onClick={e => { Pass(e) }} className='registerbtn' type='button'>Registration</button>
                    <button onClick={e => { Check(e) }} className='' type='button'>Check</button>
                </form>
            </div>
        </div>
    );
}

export default Form;