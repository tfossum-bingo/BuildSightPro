import React, { useState, useEffect } from 'react';

import JobsiteList from '../components/jobsites/JobsitesList'
import JobsiteForm from '../components/jobsites/JobsiteForm'
import Modal from '../components/modals/Modal'
import SignOut from '../components/SignOut';

export default (props) => {
    const { user, onClickSignOut, setNeedsRefresh } = props;
    console.log("HIT Homepage: ", user)
    const [displayModal, setDisplayModal] = useState(false)

    const toggleModal = () => {
        setDisplayModal(!displayModal)
    }


    if (user !== null && user !== undefined && user.Company !== undefined) {
        { console.log("Has User: ", user) }
        return (
            <div className={'home-container-grid'}>
                <div className="create-task-button">
                    <button
                        onClick={e => toggleModal()} >
                        New Jobsite
                            </button>
                    <Modal show={displayModal}
                        onClick={toggleModal}>
                        <JobsiteForm
                            onClick={toggleModal}
                            companyId={user.company_id}
                            userId={user.id}
                            toggleModal={toggleModal}
                            setNeedsRefresh={setNeedsRefresh}
                            {...props} />
                    </Modal>
                </div>
                <div>
                    <JobsiteList user={user} />
                </div>
                <div className={'home-grid-bottom-left'}>
                    <div className={'home-flex-col-bottom'}>
                        <SignOut onClick={onClickSignOut} />
                    </div>
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
