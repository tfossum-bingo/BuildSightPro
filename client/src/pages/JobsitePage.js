import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';

import { getJobsite } from '../store/actions/JobsiteActions'

import Header from '../components/Header'
import Modal from '../components/modals/Modal'
import SimpleMap from '../components/jobsites/SimpleMap'
import SpecificationsList from '../components/specifications/SpecificationsList'
import SpecificationForm from '../components/specifications/SpecificationForm'

const JobsitePage = (props) => {
    const jobsite_id = parseInt(props.match.params.jobsite_id)
    console.log('JPage: jobsite_id: ', jobsite_id)
    let x = 0
    const [displaySpecForm, setDisplaySpecForm] = useState(false)

    useEffect(() => {
        if (props.jobsiteState.refreshJobsite || (props.jobsiteState.jobsite !== null && props.jobsiteState.jobsite.id !== jobsite_id)) {
            props.getJobsite(jobsite_id)
        }
    }, [props.jobsiteState.refreshJobsite])

    const toggleSpecForm = () => {
        setDisplaySpecForm(!displaySpecForm)
    }

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
                                onClick={e => toggleSpecForm()} >
                                Add Specification Doc
                            </button>
                            <Modal show={displaySpecForm}>
                                <SpecificationForm
                                    jobsiteId={props.jobsiteState.jobsite.id}
                                    userId={props.userState.user.id}
                                    toggleModal={toggleSpecForm}
                                />
                            </Modal>
                        </div>
                    </div>
                    <div>
                        <SpecificationsList
                            jobsite={props.jobsiteState.jobsite}
                            user={props.userState.user}
                        />
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
        getJobsite: (jobsiteId) => dispatch(getJobsite(jobsiteId))
    }
}

const mapStateToProps = (state) => {
    return {
        jobsiteState: state.jobsiteState,
        userState: state.userState,
        user: state.userState.user
    }
}

export default connect(mapStateToProps, mapActionsToProps)(JobsitePage)