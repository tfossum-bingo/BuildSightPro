import React, {useState} from "react";
import {Redirect} from 'react-router'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

export default ({children, type, onClick, buttonStyle, buttonSize}) => {
    const [signedOut, setSignedOut] = useState(false)

    const clearAccount = () => {
        localStorage.clear("account_id")
        onClick()
        setSignedOut(true)
    }

    if (signedOut) {
        < Redirect to='/' push={true}/>
    } else {
        return (
            <button
                className={'btn-list'}
                onClick={(e) => clearAccount()}
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
