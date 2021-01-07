import React, { useState } from 'react';
import { connect } from 'react-redux'
import TextInput from '../components/TextInput';
import { loginUser } from '../store/actions/UserActions'
import { __LoginUser } from '../services/UserService';
// import '../styles/Button.css'
// import '../styles/SignUp.css'

const SignInPage = (props) => {
    const { setUser } = props
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [formError, setFormError] = useState(false);

    const emailField = (e) => {
        setLoginValue(e.target.value);
        console.log('Email: ', loginValue);
    };

    const passwordField = (e) => {
        setPasswordValue(e.target.value);
        console.log('Password: ', passwordValue);
    };

    const handleSubmit = async (event) => {
        console.log('HIT handleLogin Submit', loginValue, passwordValue);
        event.preventDefault();
        try {
            const userData = { email: loginValue, password: passwordValue };
            const loginResponse = await __LoginUser(userData);
            console.log('Login Response: ', loginResponse === undefined);
            if (loginResponse !== "") {
                setUser(loginResponse)
                props.history.push('/home');
            }
        } catch (error) {
            setFormError(true);
        }
    };


    return (
        <div className='form-container'>
            <form className='form-content-right' onSubmit={(e) => handleSubmit(e)}>
                <h1>Sign In</h1>
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                        Email
                        <TextInput
                            className='form-input'
                            placeholder='email'
                            name='email'
                            type='email'
                            onChange={emailField}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>
                        Password
                        <TextInput
                            className='form-input'
                            placeholder='password'
                            name='password'
                            type='password'
                            onChange={passwordField}
                        />
                    </label>
                </div>
                <div>
                    <button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        Submit
                    </button>
                </div>
            </form>

        </div>
    );
};

export default SignInPage;
