import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { __GetJobsite } from '../services/JobsiteService'
import SimpleMap from '../components/jobsites/SimpleMap'
import SpecificationsList from '../components/specifications/SpecificationsList'

// import JobsiteList from '../components/jobsites/JobsitesList'
import SignOut from '../components/SignOut';

const JobsitePage = (props) => {
    // const { user, onClickSignOut, setNeedsRefresh } = props;
    const { onClickSignOut } = props;
    const jobsite_id = parseInt(props.match.params.jobsite_id)
    const [jobsite, setJobsite] = useState(null)
    console.log("HIT JobsitePage", jobsite)

    useEffect(() => {
        if (jobsite == null) {
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
                <h2>{jobsite.address_1}</h2>
                <div className={'home-grid-bottom-left'}>
                    <div>
                        <SimpleMap center={{lat: jobsite.latitude, lng: jobsite.longitude}} zoom={10}  />
                    </div>
                    <div className={'home-flex-col-bottom'}>
                        <SignOut onClick={onClickSignOut} />
                    </div>
                    <div>
                        <SpecificationsList jobsite={jobsite} />
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