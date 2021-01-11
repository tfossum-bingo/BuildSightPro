import React from 'react'
import { connect } from 'react-redux'
import { showJobsiteUserForm } from '../../store/actions/JobsiteActions'

import JobsiteUserList from './JobsiteUserList'
import ListHeader from '../ListHeader'


const JobsiteUsers = (props) => {
    return (
        <div className='jobsite-user-container'>
            <ListHeader
                displayFormAction={props.showJobsiteUserForm}
                refreshAction={null}
                title='Technicians' />
            <JobsiteUserList />
        </div>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        showJobsiteUserForm: () => dispatch(showJobsiteUserForm())
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, mapActionsToProps)(JobsiteUsers)