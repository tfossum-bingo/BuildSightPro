import React, { useState } from 'react';
import { connect } from 'react-redux'
import { getUser } from '../store/actions/UserActions'

import Header from '../components/Header'
import JobsiteList from '../components/jobsites/JobsitesList'
import JobsiteForm from '../components/jobsites/JobsiteForm'
import ListHeader from '../components/ListHeader'
import Modal from '../components/modals/Modal'


const JobsitesPage = (props) => {
    const [displayJobsiteModal, setDisplayModal] = useState(false)

    const toggleJobsiteModal = () => {
        setDisplayModal(!displayJobsiteModal)
    }

    return (
        <div className={'home-container-grid'}>
            <Header />
            <div className='jobsites-container'>
                <ListHeader 
                    displayFormAction={toggleJobsiteModal}
                    title='Jobsites'
                    width='550px'
                />
                <Modal show={displayJobsiteModal}>
                    <JobsiteForm
                        onClick={toggleJobsiteModal}
                        toggleJobsiteModal={toggleJobsiteModal}
                        {...props} />
                </Modal>
            </div>
            <div>
                <JobsiteList />
            </div>

        </div>
    )
}


const mapActionsToProps = (dispatch) => {
    return {
        getUser: () => dispatch(getUser())
    }
}

const mapStateToProps = (state) => {
    return {
        userState: state.userState
    }
}

export default connect(mapStateToProps, mapActionsToProps)(JobsitesPage)