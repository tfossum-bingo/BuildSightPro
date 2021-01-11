import React from 'react'

import SignOut from '../components/SignOut'

const Header = () => {

    return (
        <div className='header'>
            <div className="flex-row header-row">
                <h1>JobSightPro</h1>
                <div>
                    <SignOut />
                </div>
            </div>
        </div>
    )

}

export default Header