import React from 'react'

import SignOut from '../components/SignOut'

export default (props) => {
    
    return (
        <div className='header'>
            <div className="flex-row header-row">
                <h1>JobSitePro</h1>
                <div>
                    <SignOut />
                </div>
            </div>
        </div>
    )

}