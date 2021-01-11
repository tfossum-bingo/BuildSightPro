import React from 'react'
import { connect } from 'react-redux'
import { deleteJobsiteUser } from '../../store/actions/JobsiteActions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"

const JobsiteUserDelete = (props) => {
    const { jobsiteUserId } = props
    const doRender = props.userState.user.id === props.jobsiteState.jobsite.userId
    return doRender ? (
        <div>
            <FontAwesomeIcon
                onClick={() => props.deleteJobsiteUser(jobsiteUserId)}
                className="fas fa-white"
                style={{ color: "green" }}
                icon={faTrashAlt}
            />
        </div>
    ) : (
            null
        )
}

const mapActionsToProps = (dispatch) => {
    return {
        deleteJobsiteUser: (jobsiteUserId) => dispatch(deleteJobsiteUser(jobsiteUserId))
    }
}

const mapStateToProps = (state) => {
    return {
        jobsiteState: state.jobsiteState,
        userState: state.userState
    }
}

export default connect(mapStateToProps, mapActionsToProps)(JobsiteUserDelete)