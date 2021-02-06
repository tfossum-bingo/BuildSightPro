import React from 'react'
import SignOut from './SignOut'

const Menu = (props) => {
    const { firstName, lastName, email } = props.user

    if (props.displayMenu) {
        return (
            <div className='menu-pop-out modal-styles'>
                <div>
                    <button
                        className='modal-close-button'
                        onClick={props.onClick}>
                        X
                    </button>
                </div>
                <div>
                    user: {firstName + " " + lastName}
                </div>
                <div>
                    email: {email}
                </div>
                <div>
                    {/* org: {organization_id.name}  */}
                </div>
                <div className='menu-logout'>
                    <SignOut />
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default Menu