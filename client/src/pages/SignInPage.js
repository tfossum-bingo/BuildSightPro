import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import TextInput from '../components/TextInput';
import { loginUser, updateLoginForm } from '../store/actions/UserActions'


const SignInPage = (props) => {

    const handleChange = (event) => {
        console.log('HIT SI handleChange: ', event.target.value)
        
        props.loginForm(event.target.name, event.target.value)
    }

    const handleSubmit = async (event) => {
        console.log('HIT handleLogin Submit', props.userState);
        event.preventDefault();
        const userData = {email: props.userState.email, password: props.userState.password}
        props.loginUser(userData)
    }


    return props.userState.user === null ? (
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
                            value={props.userState.email}
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
                            value={props.userState.password}
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
    ) : (
        <Redirect to="/jobsites" />
     )
}

const mapActionsToProps = (dispatch) => {
    return {

        loginForm: (name, value) => dispatch(updateLoginForm(name, value)),
        loginUser: (formValues) => dispatch(loginUser(formValues))
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
