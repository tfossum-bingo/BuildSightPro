import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {
    setJobsiteUsersNeedRefresh,
    refreshJobsiteUsersList,
    showJobsiteUserForm
} from '../../store/actions/JobsiteActions'

import JobsiteUserList from './JobsiteUserList'
import ListHeader from '../ListHeader'


const JobsiteUsers = (props) => {

    useEffect(() => {
        if (props.jobsiteState.refreshJobsiteUsers === true) {
            props.refreshJobsiteUsersList(props.jobsiteState.jobsite.id)
        }
    }, [])

    return (
        <div className='jobsite-user-container'>
            <ListHeader
                displayFormAction={props.showJobsiteUserForm}
                refreshAction={props.setJobsiteUsersNeedRefresh}
                title='Technicians'/>
            <JobsiteUserList/>
        </div>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        setJobsiteUsersNeedRefresh: () => dispatch(setJobsiteUsersNeedRefresh()),
        refreshJobsiteUsersList: (jobsiteId) => dispatch(refreshJobsiteUsersList(jobsiteId)),
        showJobsiteUserForm: () => dispatch(showJobsiteUserForm())
    }
}

const mapStateToProps = (state) => {
    return {
        jobsiteState: state.jobsiteState
    }
}

export default connect(mapStateToProps, mapActionsToProps)(JobsiteUsers)