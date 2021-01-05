import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { __RegisterUser } from '../services/UserService';
// import '../styles/SignUp.css'
// import '../styles/Button.css'

const SignUpPage = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [formError, setFormError] = useState(false);

  const formFieldChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    switch (fieldName) {
      case 'firstName':
        setFirstName(fieldValue);
        break;
      case 'lastName':
        setlastName(fieldValue);
        break;
      case 'email':
        setEmail(fieldValue);
        break;
      case 'password':
        setPassword(fieldValue);
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formState = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      zipCode: zipCode,
    };
    try {
      const accountResponse = await __RegisterUser(formState);
      props.setUser(accountResponse)
      props.history.push('/home');
    } catch (error) {
      setFormError(true);
    }
  };

  return (
    <div className='form-container'>
      <form className='form-content-right' onSubmit={(e) => handleSubmit(e)}>
        <h1>Sign Up</h1>
        <div className='form-inputs'>
          <label htmlFor='firtName' >
            First Name
            <TextInput
              type='text'
              name='firstName'
              className='form-input'
              onChange={formFieldChange}
            />
          </label>
        </div>
        <div className='form-inputs'>
          <label htmlFor='lastName' >
            Last Name
            <TextInput
              type='text'
              name='lastName'
              className='form-input'
              onChange={formFieldChange}
            />
          </label>
        </div>
        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>
            Email
            <TextInput
              type='text'
              name='email'
              className='form-input'
              onChange={formFieldChange}
            />
          </label>
        </div>
        <div className='form-inputs'>
          <label htmlFor='password' className='form-label'>
            Password
            <TextInput
              type='text'
              name='password'
              className='form-input'
              onChange={formFieldChange}
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
        <div>
        <NavLink to='/signin' activeclassName='nav-active'>
        <p>Have an account?</p>
        </NavLink>
      </div>
      </form>
      
    </div>
  );
};
export default SignUpPage;
