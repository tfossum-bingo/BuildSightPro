import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { getJobsite, hideSpecForm , showSpecForm } from '../store/actions/JobsiteActions'

import Header from '../components/Header'
import Modal from '../components/modals/Modal'
import SimpleMap from '../components/jobsites/SimpleMap'
import SpecificationsList from '../components/specifications/SpecificationsList'
import SpecificationForm from '../components/specifications/SpecificationForm'

const JobsitePage = (props) => {
    const jobsite_id = parseInt(props.match.params.jobsite_id)
    console.log('JPage: jobsite_id: ', jobsite_id)
    let x = 0

    useEffect(() => {
        if (props.jobsiteState.refreshJobsite || (props.jobsiteState.jobsite !== null && props.jobsiteState.jobsite.id !== jobsite_id)) {
            props.getJobsite(jobsite_id)
        }
    }, [props.jobsiteState.refreshJobsite, props.specificationState.displaySpecForm])

    if (props.jobsiteState.jobsite !== null && props.jobsiteState.jobsite !== undefined) {
        return (
            <div className={'flex-column'}>
                {console.log('Jobsite: ', props.jobsite)}
                <Header />

                <div className='jobsite-main'>
                    <div className='jobsite-address-container'>
                        <div className='map-container'>
                            <SimpleMap center={{ lat: props.jobsiteState.jobsite.latitude, lng: props.jobsiteState.jobsite.longitude }} zoom={15} />
                        </div>
                        <div className='address-container'>
                            <p>{props.jobsiteState.jobsite.address_1}</p>
                            <p>{props.jobsiteState.jobsite.address_2}</p>
                            <p>{`${props.jobsiteState.jobsite.city}, ${props.jobsiteState.jobsite.state} ${props.jobsiteState.jobsite.postalCode}`} </p>
                        </div>
                        <div className="add-spec-container">
                            <button
                                onClick={e => props.showSpecForm()} >
                                Add Specification Doc
                            </button>
                            <Modal show={props.specificationState.displaySpecForm}>
                                <SpecificationForm
                                    jobsiteId={props.jobsiteState.jobsite.id}
                                    userId={props.userState.user.id}
                                />
                            </Modal>
                        </div>
                    </div>
                    <div>
                        <SpecificationsList />
                    </div>
                    <div>
                        <NavLink to='/jobsites' activeclassName='nav-active'>
                            <p>All Jobsites</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}


const mapActionsToProps = (dispatch) => {
    return {
        getJobsite: (jobsiteId) => dispatch(getJobsite(jobsiteId)),
        hideSpecForm: () => dispatch(hideSpecForm()),
        showSpecForm: () => dispatch(showSpecForm())
    }
}

const mapStateToProps = (state) => {
    return {
        jobsiteState: state.jobsiteState,
        specificationState: state.specificationState,
        userState: state.userState,
        user: state.userState.user
    }
}

export default connect(mapStateToProps, mapActionsToProps)(JobsitePage)