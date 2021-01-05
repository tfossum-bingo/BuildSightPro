import React, { useState, useEffect } from 'react';

import JobsiteList from '../components/jobsites/JobsitesList'
import SignOut from '../components/SignOut';

export default (props) => {
    const { user, onClickSignOut, setNeedsRefresh } = props;
    console.log("HIT Homepage: ", user)


    if (user !== null && user !== undefined && user.Company !== undefined) {
        { console.log("Has User: ", user) }
        return (
            <div className={'home-container-grid'}>
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
