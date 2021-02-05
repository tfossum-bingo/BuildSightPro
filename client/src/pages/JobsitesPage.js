import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {getUser} from '../store/actions/UserActions'
import {setJobsitesNeedsRefresh} from '../store/actions/JobsiteActions'
import {populateCompanyUserOptions} from '../store/actions/CompanyActions'

import Header from '../components/Header'
import JobsiteList from '../components/jobsites/JobsitesList'
import JobsiteForm from '../components/jobsites/JobsiteForm'
import ListHeader from '../components/ListHeader'
import Modal from '../components/modals/Modal'
// import JobsiteReducer from "../store/reducers/JobsiteReducer";


const JobsitesPage = (props) => {
    const [displayJobsiteModal, setDisplayModal] = useState(false)

    useEffect(() => {
        if (props.userState.user && props.companyState.companyUserOptions.length === 0) {
            props.populateCompanyUserOptions(props.userState.user.companyId)
        }
    }, [])

    const toggleJobsiteModal = () => {
        setDisplayModal(!displayJobsiteModal)
    }

    return props.userState.user !== null ? (
        <div className={'home-container-grid'}>
            <Header/>
            <div className='jobsites-container'>
                <div>
                    <ListHeader
                        displayFormAction={toggleJobsiteModal}
                        title='Jobsites'
                        width='550px'
                        refreshAction={props.setJobsitesNeedsRefresh}
                    />
                    <div>
                        <JobsiteList/>
                    </div>
                </div>
            </div>
            <Modal show={displayJobsiteModal}>
                <JobsiteForm
                    onClick={toggleJobsiteModal}
                    toggleJobsiteModal={toggleJobsiteModal}
                    {...props} />
            </Modal>
        </div>
    ) : (
        <div>
            Loading...
        </div>
    )
}


const mapActionsToProps = (dispatch) => {
    return {
        getUser: (userId) => dispatch(getUser(userId)),
        populateCompanyUserOptions: (companyId) => dispatch(populateCompanyUserOptions(companyId)),
        setJobsitesNeedsRefresh: () => dispatch(setJobsitesNeedsRefresh())
    }
}

const mapStateToProps = (state) => {
    return {
        companyState: state.companyState,
        jobsiteState: state.JobsiteReducer,
        userState: state.userState
    }
}

export default connect(mapStateToProps, mapActionsToProps)(JobsitesPage)