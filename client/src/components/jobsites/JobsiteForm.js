import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import {
    createJobsite,
    hideJobsiteForm,
    updateJobsiteForm
} from '../../store/actions/JobsiteActions'
import { populateCompanyUserOptions } from '../../store/actions/CompanyActions'

import SelectOption from '../SelectOption'
import TextInput from '../TextInput'


const JobsiteForm = (props) => {
    const { hideJobsiteForm } = props
    // const [formError, setFormError] = useState(false)

    const [jobsiteForm, setJobsiteForm] = useState({
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        postalCode: '',
        clientName: '',
        userId: null,
        company_id: props.userState.user.company_id
    })

    useEffect(() => {
        if (props.companyState.companyUserOptions.length === 0) {
            props.populateCompanyUserOptions(props.userState.user.companyId)
        }
    }, [])


    const formFieldChange = (e) => {
        setJobsiteForm({ ...jobsiteForm, [e.target.name]: e.target.value })
    }

    const formUserIdChange = (e) => {
        setJobsiteForm({ ...jobsiteForm, userId: parseInt(e.target.value) })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        props.createJobsite(jobsiteForm)
    }

    return (
        <div className='form-container'>
            <form className='form-content-right' onSubmit={(e) => handleSubmit(e)}>
                <h1 className='form-title'>Create Jobsite</h1>
                <div className='form-inputs'>
                    <label htmlFor='address_1' >
                        <TextInput
                            className='form-input'
                            placeholder='Address 1'
                            name='address_1'
                            type='text'
                            onChange={formFieldChange}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='address_2' >
                        <TextInput
                            className='form-input'
                            name='address_2'
                            placeholder='Address 2'
                            type='text'
                            onChange={formFieldChange}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='city' className='form-label'>
                        <TextInput
                            className='form-input'
                            name='city'
                            placeholder='City'
                            type='text'
                            onChange={formFieldChange}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='state' className='form-label'>
                        <TextInput
                            className='form-input'
                            name='state'
                            placeholder='State'
                            type='text'
                            onChange={formFieldChange}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='postalCode' className='form-label'>
                        <TextInput
                            className='form-input'
                            name='postalCode'
                            placeholder='Postal Code'
                            type='text'
                            onChange={formFieldChange}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='clientName' className='form-label'>
                        <TextInput
                            className='form-input'
                            name='clientName'
                            placeholder='Client Name'
                            type='text'
                            onChange={formFieldChange}
                        />
                    </label>
                </div>
                <div>
                    <SelectOption
                        selectOptions={props.companyState.companyUserOptions}
                        name="userId"
                        placeholder='Site Supervisor'
                        onChange={formUserIdChange}
                    />
                </div>

                <div>
                    <button
                    >
                        Submit
                    </button>
                </div>

            </form>
            <div form>
                <button onClick={hideJobsiteForm}>Close</button>
            </div>
        </div>
    )
}


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
