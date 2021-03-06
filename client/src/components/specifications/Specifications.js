import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { refreshSpecificationsList, setSpecificationsNeedRefresh } from '../../store/actions/JobsiteActions'
import { hideSpecForm, showSpecForm } from '../../store/actions/JobsiteActions'

import ListHeader from '../../components/ListHeader'
import Modal from '../../components/modals/Modal'
import SpecificationsList from './SpecificationsList'
import SpecificationForm from './SpecificationForm'

const Specifications = (props) => {
    const { displaySpecForm, jobsite, specificationsNeedsRefresh } = props.jobsiteState
    const { user } = props.userState
    useEffect(() => {
        if (specificationsNeedsRefresh === true) {
            props.refreshSpecificationsList(jobsite.id)
        }
    },[])

    return (
        <div className='flex-column flex-align-center specifications-container'>
            <div>
                <ListHeader
                    displayFormAction={props.showSpecForm}
                    refreshAction={props.setSpecificationsNeedRefresh}
                    width='800px'
                    title='Specifications'
                />
            </div>
            <Modal show={displaySpecForm}>
                <SpecificationForm
                    jobsiteId={jobsite.id}
                    userId={user.id}
                />
            </Modal>
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
        refreshSpecificationsList: (companyId) => dispatch(refreshSpecificationsList(companyId)),
        hideSpecForm: () => dispatch(hideSpecForm()),
        setSpecificationsNeedRefresh: () => dispatch(setSpecificationsNeedRefresh()),
        showSpecForm: () => dispatch(showSpecForm())
    }
}

const mapStateToProps = (state) => {
    return {
        jobsiteState: state.jobsiteState,
        userState: state.userState
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Specifications)