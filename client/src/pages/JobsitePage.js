import React, { useState, useEffect } from 'react';
import { __GetJobsite } from '../services/JobsiteService'

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
                    <div className={'home-flex-col-bottom'}>
                        <SignOut onClick={onClickSignOut} />
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