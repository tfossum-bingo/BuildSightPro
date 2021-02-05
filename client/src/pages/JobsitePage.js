import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

import {getJobsite, showJobsiteUserForm} from '../store/actions/JobsiteActions'

import JobsiteMeta from '../components/jobsites/JobsiteMeta'
import JobsiteUsers from '../components/jobsite_users/JobsiteUsers'
import JobsiteUserForm from '../components/jobsite_users/JobsiteUserForm'
import Header from '../components/Header'
import Modal from '../components/modals/Modal'
import SimpleMap from '../components/jobsites/SimpleMap'
import Specifications from '../components/specifications/Specifications'

const JobsitePage = (props) => {
    const jobsite_id = parseInt(props.match.params.jobsite_id)

    useEffect(() => {
        if (jobsiteRefreshable()) {
            props.getJobsite(jobsite_id)
        }
    }, [props.jobsiteState.refreshJobsite])

    const jobsiteRefreshable = () => {
        return props.jobsiteState.refreshJobsite || (props.jobsiteState.jobsite !== null && props.jobsiteState.jobsite.id !== jobsite_id)
    }

    const pageLoading = () => {
        return props.jobsiteState.jobsite !== null && props.jobsiteState.jobsite !== undefined
    }

    return pageLoading() ? (
        <div className={'flex-column'}>
            <Header/>
            <div className='jobsite-main'>
                <div className='flex-row flex-justify-start' id='all-jobsites-link'>
                    <NavLink to='/jobsites'>
                        - Return to All Jobsites
                    </NavLink>
                </div>
                <div className='jobsite-address-container'>
                    <div className='map-container'>
                        <SimpleMap center={{
                            lat: props.jobsiteState.jobsite.latitude,
                            lng: props.jobsiteState.jobsite.longitude
                        }} zoom={15}/>
                    </div>
                    <div className='address-container'>
                        <JobsiteMeta jobsite={props.jobsiteState.jobsite}/>
                    </div>
                    <div className='jobsiteuser-container'>
                        <JobsiteUsers/>
                    </div>
                </div>
                <div>
                    <Modal show={props.jobsiteState.displayJobsiteUserForm}>
                        <JobsiteUserForm/>
                    </Modal>
                </div>
                <div>
                    <Specifications/>
                </div>
            </div>
        </div>
    ) : (
        <div>Loading...</div>
    )
}


const mapActionsToProps = (dispatch) => {
    return {
        getJobsite: (jobsiteId) => dispatch(getJobsite(jobsiteId)),
        showJobsiteUserForm: () => dispatch(showJobsiteUserForm())
    }
}

const mapStateToProps = (state) => {
    return {
        jobsiteState: state.jobsiteState,
        specificationState: state.specificationState,
        userState: state.userState,
        user: state.userState.user
    }
}

export default connect(mapStateToProps, mapActionsToProps)(JobsitePage)