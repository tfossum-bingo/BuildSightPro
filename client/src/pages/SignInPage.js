import React, { useState } from 'react'
import { Redirect } from "react-router-dom"
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import WelcomeHeader from '../components/WelcomeHeader'
import TextInput from '../components/TextInput'
import { loginUser, updateLoginForm } from '../store/actions/UserActions'


const SignInPage = (props) => {
    const [form, setForm] = useState({
      email: '',
      password: ''
  })

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        props.loginUser(form)
    }


    return props.userState.user === null ? (
        <div className=''>
            <WelcomeHeader />
            <form className='' onSubmit={(e) => handleSubmit(e)}>
                <h1>Sign In</h1>
                <div className=''>
                    <label htmlFor='email' className='form-label'>
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
                    <button>
                        Submit
                    </button>
                </div>
            </form>
            <NavLink to='/register'>
              <p>Create an account?</p>
            </NavLink>
        </div>
    ) : (
        <Redirect to="/jobsites" />
     )
}

const mapActionsToProps = (dispatch) => {
    return {
        updateLoginForm: (name, value) => dispatch(updateLoginForm(name, value)),
        loginUser: (formValues) => dispatch(loginUser(formValues))
    }
}

const mapStateToProps = (state) => {
    return {
        userState: state.userState
    }
}

export default connect(mapStateToProps, mapActionsToProps)(SignInPage)
