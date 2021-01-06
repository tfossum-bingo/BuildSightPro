import React from 'react'
import SignOut from '../components/SignOut'

export default (props) => {
    const { onClickSignOut, user } = props

    if (user !== null && user !== undefined) {
        return (
            <div>
                <h1>JobSitePro</h1>
                <div>
                    <SignOut onClick={onClickSignOut} />
                </div>
            </div>
        )
    } else {
        return null
    }
}