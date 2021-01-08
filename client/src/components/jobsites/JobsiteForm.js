import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'

// import Button from '../components/Button';
import TextInput from '../TextInput';
import { __CreateJobsite } from '../../services/JobsiteService';
// import '../styles/SignUp.css'
// import '../styles/Button.css'

const JobsiteForm = (props) => {
    let history = useHistory()
    const { toggleJobsiteModal } = props
    const [form, setForm] = useState({
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        postalCode: '',
        clientName: '',
        user_id: props.userId,
        company_id: props.companyId
    })



    const [formError, setFormError] = useState(false);

    const formFieldChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setForm({ ...form, [fieldName]: fieldValue })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const jobsiteResponse = await __CreateJobsite(form);
            props.toggleModal()
            props.setNeedsRefresh(true)
            history.push('/home');
        } catch (error) {
            setFormError(true);
        }
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
                    <button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        Submit
                    </button>
                </div>

            </form>
            <button onClick={toggleJobsiteModal}>Close</button>
        </div>
    );
};


const mapActionsToProps = (dispatch) => {
    return {

        jobsiteForm: (formFields) => dispatch(FormEntry(formFields)),
        // loginUser: () => dispatch(loginUser())
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

export default connect(mapStateToProps, mapActionsToProps)(JobsiteForm)
