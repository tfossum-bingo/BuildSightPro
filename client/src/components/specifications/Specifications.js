import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { refreshSpecificationsList, setSpecificationsNeedRefresh } from '../../store/actions/JobsiteActions'

import SpecificationsList from './SpecificationsList'

const Specifications = (props) => {
    const { jobsite, specificationsNeedsRefresh } = props.jobsiteState
    useEffect(() => {
        if (specificationsNeedsRefresh === true) {
            console.log("HIT useEffect Refresh List")
            props.refreshSpecificationsList(jobsite.id)
        }
    }, [])

    return (
        <div className='flex-column'>
            <div className='refesh-button-container'>
                <button onClick={props.setSpecificationsNeedRefresh}>
                    Refresh Button
                </button>
            </div>
            <div className='flex-column'>
                <div>
                    <SpecificationsList />
                </div>
            </div>
        </div>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        setSpecificationsNeedRefresh: () => dispatch(setSpecificationsNeedRefresh()),
        refreshSpecificationsList: (companyId) => dispatch(refreshSpecificationsList(companyId))
    }
}

const mapStateToProps = (state) => {
    return {
        jobsiteState: state.jobsiteState
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Specifications)