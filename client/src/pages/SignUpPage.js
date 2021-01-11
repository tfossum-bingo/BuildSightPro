import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';

import { populateCompanyOptions, updateSignUpForm } from '../store/actions/SignUpActions'
import { createUser } from '../store/actions/UserActions'
import SelectOption from '../components/SelectOption'
import TextInput from '../components/TextInput'

const SignUpPage = (props) => {
  const { companyOptions } = props.signUpState
  const [form, setForm] = useState({
    companyId: null,
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  })

  useEffect(() => {
    if (companyOptions.length === 0) {
      console.log("HIT useEffect pop companies")
      props.populateCompanyOptions()
    }
  }, [])

  const formFieldChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const companyIDChange = (e) => {
    setForm({ ...form, [e.target.name]: parseInt(e.target.value) })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formState = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
      zipCode: form.zipCode,
    }
    console.log("formState: ", form)
    props.createUser(form)
  }

  return (
    <div className='flex-row'>
      <div className='form-container'>
        <form className='form-content-right' onSubmit={(e) => handleSubmit(e)}>
          <h1>Sign Up</h1>
          <div className='form-inputs'>
            <label htmlFor='firtName' >
            <TextInput
                className='form-input'
                type='text'
                placeholder="First Name"
                name='firstName'
                onChange={formFieldChange}
              />
            </label>
          </div>
          <div className='form-inputs'>
            <label htmlFor='lastName' >
            <TextInput
                className='form-input'
                type='text'
                placeholder="Last Name"
                name='lastName'
                onChange={formFieldChange}
              />
            </label>
          </div>
          <div className='form-inputs'>
            <label htmlFor='email' className='form-label'>
            <TextInput
                className='form-input'
                type='email'
                placeholder="Email Name"
                name='email'
                onChange={formFieldChange}
              />
            </label>
          </div>
          <div className='form-inputs'>
            <label htmlFor='password' className='form-label'>
            <TextInput
                className='form-input'
                type='password'
                placeholder="Password"
                name='password'
                onChange={formFieldChange}
              />
            </label>
          </div>
          <SelectOption
            selectOptions={props.signUpState.companyOptions}
            // value={form.companyId}
            name="companyId"
            onChange={companyIDChange}
          />
          <div>
            <button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              Submit
          </button>
          </div>
          <div>
            <NavLink to='/signin' activeclassName='nav-active'>
              <p>Have an account?</p>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  )
}

const mapActionsToProps = (dispatch) => {
  return {
    populateCompanyOptions: () => dispatch(populateCompanyOptions()),
    createUser: (formValues) => dispatch(createUser(formValues)),
    updateSignUpForm: (name, value) => dispatch(updateSignUpForm(name, value))
  }
}

const mapStateToProps = (state) => {
  return {
    signUpState: state.signUpState
  }
}

export default connect(mapStateToProps, mapActionsToProps)(SignUpPage)
