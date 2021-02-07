import React, {useState} from 'react'
import {connect} from 'react-redux'

import {createCompany} from '../store/actions/CompanyActions'
import TextInput from '../components/TextInput'
import {NavLink} from "react-router-dom";

const SignUpPage = (props) => {
    const [form, setForm] = useState({
        name: '',
        websiteUrl: ''
    })

    const formFieldChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        props.createCompany(form)
    }

    return (
        <div className='flex-row'>
            <div className='form-container'>
                <form className='form-content-right' onSubmit={(e) => handleSubmit(e)}>
                    <h1>Sign Up</h1>
                    <div className='form-inputs'>
                        <label htmlFor='firtName'>
                            <TextInput
                                className='form-input'
                                type='text'
                                placeholder="Name"
                                name='name'
                                onChange={formFieldChange}
                            />
                        </label>
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='lastName'>
                            <TextInput
                                className='form-input'
                                type='text'
                                placeholder="URL"
                                name='websiteUrl'
                                onChange={formFieldChange}
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
                    <p>Ready to create your user account?</p>
                </NavLink>
            </div>
        </div>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        createCompany: (formValues) => dispatch(createCompany(formValues))
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, mapActionsToProps)(SignUpPage)
