import React from 'react';
import { connect } from 'react-redux'

const JobsiteUserList = (props) => {
    const { jobsiteUsers } = props.jobsiteState

    return jobsiteUsers.length > 0 ? (
        <div>
                {jobsiteUsers.map((jobsiteUser, index) => {
                    return (
                        <p>
                            {`${jobsiteUser.User.firstName} ${jobsiteUser.User.lastName}`}
                        </p>
                    )
                })}
        </div>
    ) : (
            <div>
                Loading...
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