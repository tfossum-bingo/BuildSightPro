import React from 'react';
import JobsiteCard from './JobsiteCard';

export default (props) => {
  const { setNeedsRefresh, user } = props
  const { jobsites } = props.user.Company

  if (jobsites !== null && jobsites !== undefined && jobsites.length > 0) {
    return (
      <div>
        {jobsites.map((jobsite, index) => {
          return (
            <JobsiteCard
              jobsite={jobsite}
              key={index}
              history={props.history}
              setNeedsRefresh={setNeedsRefresh}
              user={user} />
          )
        })
        }
      </div>
    )
  } else {
    return null
  }
}
