import React from 'react';
import JobsiteCard from './JobsiteCard';

export default (props) => {
  const { setNeedsRefresh } = props
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
              setNeedsRefresh={setNeedsRefresh} />
          )
        })
        }
      </div>
    )
  } else {
    return null
  }
}
