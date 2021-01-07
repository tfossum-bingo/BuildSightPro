import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { __GetJobsite } from '../services/JobsiteService'

import Header from '../components/Header'
import Modal from '../components/modals/Modal'
import SimpleMap from '../components/jobsites/SimpleMap'
import SpecificationsList from '../components/specifications/SpecificationsList'
import SpecificationForm from '../components/specifications/SpecificationForm'

// import JobsiteList from '../components/jobsites/JobsitesList'
import SignOut from '../components/SignOut';

const JobsitePage = (props) => {
    const { user, onClickSignOut, setNeedsRefresh } = props;
    // const { onClickSignOut, user } = props;
    const jobsite_id = parseInt(props.match.params.jobsite_id)
    const [displaySpecForm, setDisplaySpecForm] = useState(false)
    const [jobsite, setJobsite] = useState(null)
    console.log("HIT JobsitePage", jobsite)

    useEffect(() => {
        if (jobsite == null) {
            console.log('HIT JobsitePage useEffect')
            findJobsite(jobsite_id)
        }
    }, [])

    const findJobsite = async (jobsite_id) => {
        const jobsite = await __GetJobsite(jobsite_id)
        try {
            setJobsite(jobsite)
            console.log('findJobsite: ', jobsite)
        } catch (error) {
            console.log("Jobsite Retrieval Error: ", error)
        }
    }

    const toggleSpecForm = () => {
        setDisplaySpecForm(!displaySpecForm)
    }

    if (jobsite !== null && jobsite !== undefined) {
        return (
            <div className={'flex-column'}>
                {console.log('Jobsite: ', jobsite)}
                <Header onClickSignOut={onClickSignOut} user={user} />

                <div className='jobsite-main'>
                    <div className='jobsite-address-container'>
                        <div className='map-container'>
                            <SimpleMap center={{ lat: jobsite.latitude, lng: jobsite.longitude }} zoom={15} />
                        </div>
                        <div className='address-container'>
                            <p>{jobsite.address_1}</p>
                            <p>{jobsite.address_2}</p>
                            <p>{`${jobsite.city}, ${jobsite.state} ${jobsite.postalCode}`} </p>
                        </div>
                        <div className="add-spec-container">
                            <button
                                onClick={e => toggleSpecForm()} >
                                Add Specification Doc
                            </button>
                            <Modal show={displaySpecForm}
                                onClick={toggleSpecForm}>
                                <SpecificationForm
                                    jobsiteId={jobsite.id}
                                    userId={user.id}
                                    toggleModal={toggleSpecForm}
                                    setNeedsRefresh={setNeedsRefresh}
                                    {...props} />
                            </Modal>
                        </div>
                    </div>
                    <div>
                        <SpecificationsList
                            jobsite={jobsite}
                            setNeedsRefresh={setNeedsRefresh}
                            user={user} />
                    </div>
                    <div>
                        <NavLink to='/home' activeclassName='nav-active'>
                            <p>All Jobsites</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>Loading...</div>
        )
    }
};

export default JobsitePage