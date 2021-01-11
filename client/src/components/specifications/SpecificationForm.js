import React, { useState } from 'react';
import { connect } from 'react-redux'

import { createSpecification, hideSpecForm } from '../../store/actions/JobsiteActions'
import TextInput from '../TextInput';


const SpecificationForm = (props) => {
    const [form, setForm] = useState({
        title: '',
        description: '',
        user_id: props.userId,
        jobsite_id: props.jobsiteId,
        specificationImage: null
    })


    const formFieldChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setForm({ ...form, [fieldName]: e.target.type === 'file' ? e.target.files[0] : fieldValue })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        let formData = new FormData()
        formData.append('title', form.title)
        formData.append('description', form.description)
        formData.append('user_id', form.user_id)
        formData.append('jobsite_id', form.jobsite_id)
        formData.append('specificationImage', form.specificationImage)

        props.createSpecification(formData);
    }

    return (
        <div className='form-container'>
            <form className='form-content-right' onSubmit={(e) => handleSubmit(e)}>
                <h1 className='form-title'>Add Specification</h1>
                <div className='form-inputs'>
                    <label htmlFor='title' >
            <TextInput
                            className='form-input'
                            name='title'
                            placeholder='Title'
                            type='text'
                            onChange={formFieldChange}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='description' >
            <TextInput
                            className='form-input'
                            name='description'
                            placeholder='Comments'
                            type='text'
                            onChange={formFieldChange}
                        />
                    </label>
                </div>
                <input
                    type="file"
                    placeholder="Upload A File"
                    name="specificationImage"
                    onChange={formFieldChange}
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

            </form>
            <button onClick={props.hideSpecForm}>Close</button>
        </div>
    )
}


const mapActionsToProps = (dispatch) => {
    return {
        createSpecification: (formData) => dispatch(createSpecification(formData)),
        hideSpecForm: () => dispatch(hideSpecForm())
    }
}

const mapStateToProps = (state) => {
    return {
        jobsiteState: state.jobsiteState,
        userState: state.userState,
    }
}

export default connect(mapStateToProps, mapActionsToProps)(SpecificationForm)
