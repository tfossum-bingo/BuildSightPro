import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import Header from '../components/Header'
import JobsiteList from '../components/jobsites/JobsitesList'
import JobsiteForm from '../components/jobsites/JobsiteForm'
import Modal from '../components/modals/Modal'
import { getUser } from '../store/actions/UserActions';


const HomePage = (props) => {
    const { user, onClickSignOut, setNeedsRefresh } = props;
    console.log("HIT Homepage: ", user)
    const [displayJobsiteModal, setDisplayModal] = useState(false)

    useEffect(() => {
        if(props.userState.refreshNeeded) {
            props.getUser()
        }
    }, [props.userState.refreshNeeded])

    const toggleJobsiteModal = () => {
        setDisplayModal(!displayJobsiteModal)
    }

    if (user !== null && user !== undefined && user.Company !== undefined) {
        { console.log("Has User: ", user) }
        return (
            <div className={'home-container-grid'}>
                <Header user={user} onClickSignOut={onClickSignOut}/>
                <div className="create-task-button">
                    <button
                        onClick={e => toggleJobsiteModal()} >
                        New Jobsite
                            </button>
                    <Modal show={displayJobsiteModal}>
                        <JobsiteForm
                            onClick={toggleJobsiteModal}
                            toggleJobsiteModal={toggleJobsiteModal}
                            {...props} />
                    </Modal>
                </div>
                <div>
                    <JobsiteList user={user} />
                </div>

            </div>
        );
    } else {
        return (
            <div>Loading...</div>
        )
    }
};


const mapActionsToProps = (dispatch) => {
    return {
        getUser: () => dispatch(getUser())
        // loginForm: (formFields) => dispatch(FormEntry(formFields)),
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

export default connect(mapStateToProps, mapActionsToProps)(JobsitesPage)