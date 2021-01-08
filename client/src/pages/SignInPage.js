import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import TextInput from '../components/TextInput';
import { loginUser } from '../store/actions/UserActions'
import { __LoginUser } from '../services/UserService';

const SignInPage = (props) => {

    useEffect(() => {
        
    }, [])

    const handleChange = (event) => {
        props.createTodo(event.target.value)
    }

    const handleSubmit = async (event) => {
        console.log('HIT handleLogin Submit', loginValue, passwordValue);
        event.preventDefault();
        props.loginUser(props.userState.loginForm)
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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

const mapActionsToProps = (dispatch) => {
    return {

        loginForm: (formFields) => dispatch(FormEntry(formFields)),
        loginUser: () => dispatch(loginUser())
        // completeTodo: (index) => dispatch(CompleteTodo(index)),
        // createTodo: (formValue) => dispatch(CreateNewTodo(formValue)),
        // removeTodo: (index) => dispatch(RemoveTodo(index))
    }
}

const mapStateToProps = (state) => {
    // console.log('MapStateToProps: ', state)
    return {
        userState: state.userState
    }
}

export default connect(mapStateToProps, mapActionsToProps)(SignInPage)
