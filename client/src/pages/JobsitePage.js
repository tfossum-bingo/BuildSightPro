import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { __GetJobsite } from '../services/JobsiteService'

import Header from '../components/Header'
import SimpleMap from '../components/jobsites/SimpleMap'
import SpecificationsList from '../components/specifications/SpecificationsList'

// import JobsiteList from '../components/jobsites/JobsitesList'
import SignOut from '../components/SignOut';

const JobsitePage = (props) => {
    const { user, onClickSignOut, setNeedsRefresh } = props;
    // const { onClickSignOut, user } = props;
    const jobsite_id = parseInt(props.match.params.jobsite_id)
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


    if (jobsite !== null && jobsite !== undefined) {
        return (
            <div className={'home-container-grid'}>
                {console.log('Jobsite: ', jobsite)}
                <Header onClickSignOut={onClickSignOut} user={user} />
                <h2>{jobsite.address_1}</h2>
                <h3>{jobsite.address_2}</h3>
                <h3>{jobsite.city}</h3>
                <h3>{jobsite.state}</h3>
                <h3>{jobsite.postalCode}</h3>
                <div className={'home-grid-bottom-left'}>
                    <div>
                        <SimpleMap center={{lat: jobsite.latitude, lng: jobsite.longitude}} zoom={10}  />
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