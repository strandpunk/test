import './Form.css'

function Form() {

    return (
        <div className='form__wrapper'>
            <div>
                <form>
                    <h1>Registration</h1>
                    <unpit name='email' type='text' placeholder='Enter your email....' />
                    <unpit name='password' type='password' placeholder='Enter your password....' />
                    <button type='submit'>Registration</button>
                </form>
            </div>
        </div>
    );
}

export default Form;