import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import {
    createJobsiteUser,
    hideJobsiteUserForm,
} from '../../store/actions/JobsiteActions'
import { populateCompanyUserOptions } from '../../store/actions/CompanyActions'

import SelectOption from '../SelectOption'

const JobsiteUserForm = (props) => {
    const {populateCompanyUserOptions} = props
    const [form, setForm] = useState({
        user_id: null,
        jobsite_id: props.jobsiteState.jobsite.id
    })

    useEffect(() => {
        if (props.companyState.companyUserOptions.length === 0) {
            populateCompanyUserOptions(props.jobsiteState.jobsite.companyId)
        }
    }, [])

    const formFieldChange = (e) => {
        setForm({ ...form, [e.target.name]: parseInt(e.target.value) })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        props.createJobsiteUser(form)
    }

    return (
        <div className='form-container'>
            <form className='form-content-right' onSubmit={(e) => handleSubmit(e)}>
                <h1>Create Jobsite</h1>
                <div>
                    <SelectOption
                        selectOptions={props.companyState.companyUserOptions}
                        name="user_id"
                        onChange={formFieldChange}
                    />
                </div>
                <div>
                    <button>
                        Submit
                    </button>
                </div>
            </form>
            <button onClick={props.hideJobsiteUserForm}>Close</button>
        </div>
    )
}


const mapActionsToProps = (dispatch) => {
    return {
        createJobsiteUser: (formFields) => dispatch(createJobsiteUser(formFields)),
        hideJobsiteUserForm: () => dispatch(hideJobsiteUserForm()),
        populateCompanyUserOptions: (companyId) => dispatch(populateCompanyUserOptions(companyId))
    }
}

const mapStateToProps = (state) => {
    return {
        companyState: state.companyState,
        userState: state.userState,
        jobsiteState: state.jobsiteState

    }
}

export default connect(mapStateToProps, mapActionsToProps)(JobsiteUserForm)
