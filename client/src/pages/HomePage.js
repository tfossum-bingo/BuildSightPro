import React from 'react';

import SignOut from '../components/SignOut';

// import '../styles/Home.css';
// import '../styles/HomeLayout.css';


export default (props) => {
    const {user, onClickSignOut, setNeedsRefresh} = props;
    console.log("HIT Homepage")
    if (user !== null && user !== undefined) {
        return (
            <div className={'home-container-grid'}>
                <div className={'home-grid-bottom-left'}>
                    <div className={'home-flex-col-bottom'}>
                        <SignOut onClick={onClickSignOut}/>
                    </div>
                </div>
            </div>
        );
    } else {
        <div>Loading...</div>;
    }
};
