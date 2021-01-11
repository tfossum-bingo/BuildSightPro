import React from 'react';
import { connect } from 'react-redux'
import JobsiteUserDelete from './JobsiteUserDelete'

const JobsiteUserList = (props) => {
    const { jobsiteUsers } = props.jobsiteState

    return jobsiteUsers.length > 0 ? (
        <div>
            {jobsiteUsers.map((jobsiteUser, index) => {
                return (
                    <div>
                        <p key={index}>
                            {`${jobsiteUser.User.firstName} ${jobsiteUser.User.lastName}`}
                        </p>
                        <JobsiteUserDelete jobsiteUserId={jobsiteUser.id}/>
                    </div>
                )
            })}
        </div>
    ) : (
            <div>
                No workers assigned
            </div>
        )
}

const mapActionsToProps = (dispatch) => {
    return {

    }
}

const mapStateToProps = (state) => {
    return {
        jobsiteState: state.jobsiteState

    }
}

export default connect(mapStateToProps, mapActionsToProps)(JobsiteUserList)