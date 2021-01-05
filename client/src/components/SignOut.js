import React, { useState } from "react";
import { Redirect } from 'react-router'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const [signedOut, setSignedOut] = useState(false)

    const clearUser = () => {
        localStorage.clear("user_id")
        onClick()
        setSignedOut(true)
    }

    if (signedOut) {
        {console.log("HIT Signed Out")}
        < Redirect to='/' push={true} />
    } else {
        return (
            <button
                className={'btn-list'}
                onClick={(e) => clearUser()}
            >
                <FontAwesomeIcon
                    className="fas fa-white"
                    icon={faSignOutAlt}
                    inverse
                />
            </button>
        );
    }
};
