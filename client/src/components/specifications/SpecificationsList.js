import React from 'react';
import SpecificationCard from './SpecificationCard';

export default (props) => {
//   const { setNeedsRefresh } = props
  const { specifications } = props.jobsite

  if (specifications !== null && specifications !== undefined && specifications.length > 0) {
    return (
      <div>
        {specifications.map((specification, index) => {
          return (
            <SpecificationCard
              specification={specification}
              key={index} />
          )
        })
        }
      </div>
    )
  } else {
    return null
  }
}
