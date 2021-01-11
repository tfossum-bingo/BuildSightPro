import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { getJobsite, showJobsiteUserForm } from '../store/actions/JobsiteActions'

import JobsiteUsers from '../components/jobsite_users/JobsiteUsers'
import JobsiteUserForm from '../components/jobsite_users/JobsiteUserForm'
import Header from '../components/Header'
import Modal from '../components/modals/Modal'
import SimpleMap from '../components/jobsites/SimpleMap'
import Specifications from '../components/specifications/Specifications'

const JobsitePage = (props) => {
    const jobsite_id = parseInt(props.match.params.jobsite_id)

    useEffect(() => {
        if (props.jobsiteState.refreshJobsite || (props.jobsiteState.jobsite !== null && props.jobsiteState.jobsite.id !== jobsite_id)) {
            props.getJobsite(jobsite_id)
        }
    }, [props.jobsiteState.refreshJobsite])


    if (props.jobsiteState.jobsite !== null && props.jobsiteState.jobsite !== undefined) {
        return (
            <div className={'flex-column'}>
                <Header />
                <div className='jobsite-main'>
                    <div className='flex-row flex-justify-start' id='all-jobsites-link'>
                        <NavLink to='/jobsites'>
                            - Return to All Jobsites
                        </NavLink>
                    </div>
                    <div className='jobsite-address-container'>
                        <div className='map-container'>
                            <SimpleMap center={{ lat: props.jobsiteState.jobsite.latitude, lng: props.jobsiteState.jobsite.longitude }} zoom={15} />
                        </div>
                        <div className='address-container'>
                            <p>{props.jobsiteState.jobsite.address_1}</p>
                            <p>{props.jobsiteState.jobsite.address_2}</p>
                            <p>{`${props.jobsiteState.jobsite.city}, ${props.jobsiteState.jobsite.state} ${props.jobsiteState.jobsite.postalCode}`} </p>
                        </div>
                        <div className="add-jobsiteuser-container">
                            <button
                                onClick={props.showJobsiteUserForm} >
                                Add User to Jobsite
                            </button>
                            <Modal show={props.jobsiteState.displayJobsiteUserForm}>
                                <JobsiteUserForm />
                            </Modal>
                        </div>
                        <div className='jobsiteuser-container'>
                            <JobsiteUsers />
                        </div>
                    </div>
                    <div>
                        <Specifications />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
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