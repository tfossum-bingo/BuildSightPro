import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import SpecificationCard from './SpecificationCard';

const SpecificationList = (props) => {
  //   const { setNeedsRefresh } = props
  const specifications = props.specifications

  useEffect(() => {

  }, [])

  const isRender = (specifications !== null && specifications !== undefined && specifications.length > 0)


  return (
    <div>
      { isRender ? specifications.map((specification, index) => {
        return (
          <SpecificationCard
            specification={specification}
            key={index} />
        )
      }) : null
      }
    </div>
  )
}


const mapActionsToProps = (dispatch) => {
  return {

  }
}

const mapStateToProps = (state) => {
  return {
    specifications: state.jobsiteState.specifications
  }
}

export default connect(mapStateToProps, mapActionsToProps)(SpecificationList)
