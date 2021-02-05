import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getCompanyJobsites } from '../../store/actions/JobsiteActions'
import JobsiteCard from './JobsiteCard'

const JobsiteList = (props) => {

  useEffect(() => {
    if (props.userState.user && props.jobsiteState.refreshJobsiteList === true) {
      props.getCompanyJobsites(props.userState.user.companyId)
    }
  }, [])
  // }, [props.jobsiteState.refreshJobsiteList])

  const doRender = props.jobsiteState.companyJobsites.length > 0

  return doRender ? (
    <div>
      {props.jobsiteState.companyJobsites.map((jobsite, index) => {
        return (
          <JobsiteCard
            jobsite={jobsite}
            key={index}
          />
        )
      })
      }
    </div>
  ) : (
      null
    )
}

const mapActionsToProps = (dispatch) => {
  return {
    getCompanyJobsites: (companyId) => dispatch(getCompanyJobsites(companyId)),
  }
}

const mapStateToProps = (state) => {
  return {
    jobsiteState: state.jobsiteState,
    userState: state.userState
  }
}

export default connect(mapStateToProps, mapActionsToProps)(JobsiteList)