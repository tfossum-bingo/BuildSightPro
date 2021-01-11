import React from 'react';
import { connect } from 'react-redux'
import JobsiteUserDelete from './JobsiteUserDelete'

const JobsiteUserList = (props) => {
    const { jobsiteUsers } = props.jobsiteState

    return jobsiteUsers.length > 0 ? (
        <div>
            {jobsiteUsers.map((jobsiteUser, index) => {
                return (
                    <div
                        className='basic-card jobsite-user-card flex-row'
                        key={index}>
                        <div>
                            {`${jobsiteUser.User.firstName} ${jobsiteUser.User.lastName}`}
                        </div>
                        <div>
                            <JobsiteUserDelete jobsiteUserId={jobsiteUser.id} />
                        </div>
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