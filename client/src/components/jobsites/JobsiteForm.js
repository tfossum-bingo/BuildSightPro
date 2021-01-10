import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';

import { __CreateJobsite } from '../../services/JobsiteService';

import { 
    createJobsite,
    hideJobsiteForm,
    updateJobsiteForm 
} from '../../store/actions/JobsiteActions'
import { populateCompanyUserOptions } from '../../store/actions/CompanyActions'

import SelectOption from '../SelectOption'
import TextInput from '../TextInput'



const JobsiteForm = (props) => {
    let history = useHistory()
    const { companyUserOptions } = props.companyState
    const { toggleJobsiteModal } = props
    const { user } = props.userState

    const [form, setForm] = useState({
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        postalCode: '',
        clientName: '',
        userId: null,
        company_id: props.userState.user.company_id
    })
    const [formError, setFormError] = useState(false);

    useEffect(() => {
        if (companyUserOptions.length === 0) {
            props.populateCompanyUserOptions(user.companyId)
        }
    }, [])


    const formFieldChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const formUserIdChange = (e) => {
        setForm({...form, userId: parseInt(e.target.value)})
    }

    const handleSubmit = async (event) => {
        console.log("JS Form Submit: ", form)
        event.preventDefault();
        props.createJobsite(form)
    }

    return (
        <div className='form-container'>
            <form className='form-content-right' onSubmit={(e) => handleSubmit(e)}>
                <h1>Create Jobsite</h1>
                <div className='form-inputs'>
                    <label htmlFor='address_1' >
                        Address 1
            <TextInput
                            type='text'
                            name='address_1'
                            className='form-input'
                            onChange={formFieldChange}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='address_2' >
                        Address 2
            <TextInput
                            type='text'
                            name='address_2'
                            className='form-input'
                            onChange={formFieldChange}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='city' className='form-label'>
                        City
            <TextInput
                            type='text'
                            name='city'
                            className='form-input'
                            onChange={formFieldChange}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='state' className='form-label'>
                        State
                    <TextInput
                            type='text'
                            name='state'
                            className='form-input'
                            onChange={formFieldChange}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='postalCode' className='form-label'>
                        Postal Code
                    <TextInput
                            type='text'
                            name='postalCode'
                            className='form-input'
                            onChange={formFieldChange}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='clientName' className='form-label'>
                        Client Name
            <TextInput
                            type='text'
                            name='clientName'
                            className='form-input'
                            onChange={formFieldChange}
                        />
                    </label>
                </div>
                <div>
                    <SelectOption
                        selectOptions={props.companyState.companyUserOptions}
                        name="userId"
                        onChange={formUserIdChange}
                    />
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
            <button onClick={props.hideJobsiteForm}>Close</button>
        </div>
    );
};


const mapActionsToProps = (dispatch) => {
    return {
        hideJobsiteForm: () => dispatch(hideJobsiteForm()),
        createJobsite: (formFields) => dispatch(createJobsite(formFields)),
        populateCompanyUserOptions: (companyId) => dispatch(populateCompanyUserOptions(companyId)),
        updateJobsiteForm: (formFields) => dispatch(updateJobsiteForm(formFields)),


    }
}

const mapStateToProps = (state) => {
    return {
        companyState: state.companyState,
        jobsiteState: state.jobsiteState,
        userState: state.userState
    }
}

export default connect(mapStateToProps, mapActionsToProps)(JobsiteForm)
