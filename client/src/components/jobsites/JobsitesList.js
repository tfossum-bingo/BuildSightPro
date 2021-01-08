import React, { useEffect} from 'react';
import { connect } from 'react-redux'
import { getCompanyJobsites } from '../../store/actions/JobsiteActions'
import JobsiteCard from './JobsiteCard'

const JobsiteList = (props) => {
  
  useEffect(() => {
    if (props.jobsiteState.refreshJobsiteList) {
        props.getCompanyJobsites(props.userState.user.companyId)
    }
}, [props.jobsiteState.refreshJobsiteList])

  if (props.jobsiteState.companyJobsites.length > 0) {
    return (
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
    )
  } else {
    return null
  }
}

const mapActionsToProps = (dispatch) => {
  return {
      getCompanyJobsites: (companyId) => dispatch(getCompanyJobsites(companyId))
  }
}

const mapStateToProps = (state) => {
  // console.log('MapStateToProps: ', state)
  return {
      jobsiteState: state.jobsiteState,
      userState: state.userState
  }
}

export default connect(mapStateToProps, mapActionsToProps)(JobsiteList)