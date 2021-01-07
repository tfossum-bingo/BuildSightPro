import React, { useState, useEffect } from 'react';

import Header from '../components/Header'
import JobsiteList from '../components/jobsites/JobsitesList'
import JobsiteForm from '../components/jobsites/JobsiteForm'
import Modal from '../components/modals/Modal'


export default (props) => {
    const { user, onClickSignOut, setNeedsRefresh } = props;
    console.log("HIT Homepage: ", user)
    const [displayJobsiteModal, setDisplayModal] = useState(false)

    const toggleJobsiteModal = () => {
        setDisplayModal(!displayJobsiteModal)
    }


    if (user !== null && user !== undefined && user.Company !== undefined) {
        { console.log("Has User: ", user) }
        return (
            <div className={'home-container-grid'}>
                <Header user={user} onClickSignOut={onClickSignOut}/>
                <div className="create-task-button">
                    <button
                        onClick={e => toggleJobsiteModal()} >
                        New Jobsite
                            </button>
                    <Modal show={displayJobsiteModal}>
                        <JobsiteForm
                            onClick={toggleJobsiteModal}
                            companyId={user.company_id}
                            userId={user.id}
                            toggleJobsiteModal={toggleJobsiteModal}
                            setNeedsRefresh={setNeedsRefresh}
                            {...props} />
                    </Modal>
                </div>
                <div>
                    <JobsiteList user={user} />
                </div>

            </div>
        );
    } else {
        { setNeedsRefresh(true) }
        return (
            <div>Loading...</div>
        )
    }
};
