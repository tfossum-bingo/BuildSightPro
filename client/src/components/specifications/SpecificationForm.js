import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

// import Button from '../components/Button';
import TextInput from '../TextInput';
import { __CreateSpecification } from '../../services/SpecificationService';
// import '../styles/SignUp.css'
// import '../styles/Button.css'

const JobsiteForm = (props) => {
    let history = useHistory()
    const { toggleModal } = props
    const [formError, setFormError] = useState(false);
    const [form, setForm] = useState({
        title: '',
        description: '',
        user_id: props.userId,
        jobsite_id: props.jobsiteId
    })


    const formFieldChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setForm({ ...form, [fieldName]: e.target.type === 'file' ? e.target.files[0] : fieldValue })
    }

    const handleSubmit = async (event) => {
        console.log("HIT Spec Form Submit")

        event.preventDefault()
        let formData = new FormData()
        formData.append('title', form.title)
        formData.append('description', form.description)
        formData.append('user_id', form.user_id)
        formData.append('jobsite_id', form.jobsite_id)
        formData.append('specificationImage', form.specficationImage)
        console.log("formData: ", form)
        // try {
        const jobsiteResponse = await __CreateSpecification(form);
        props.toggleModal()
        props.setNeedsRefresh(true)
        history.push(`/jobsites/${props.jobsiteId}`);
        // } catch (error) {
        //     setFormError(true);
        // }
    }

    return (
        <div className='form-container'>
            <form className='form-content-right' onSubmit={(e) => handleSubmit(e)}>
                <h1>Add Specification</h1>
                <div className='form-inputs'>
                    <label htmlFor='title' >
                        Title
            <TextInput
                            type='text'
                            name='title'
                            className='form-input'
                            onChange={formFieldChange}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='description' >
                        Description
            <TextInput
                            type='text'
                            name='description'
                            className='form-input'
                            onChange={formFieldChange}
                        />
                    </label>
                </div>
                <input
                    type="file"
                    placeholder="Upload A File"
                    name="specificationImage"
                    // value={newPerson.profileImage}
                    // value={fileName || ""}
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
            <button onClick={toggleModal}>Close</button>
        </div>
    );
};
export default JobsiteForm;
