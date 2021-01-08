import React from "react";
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { logoutUser } from '../store/actions/UserActions'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const SignOut = (props) => {
    
    if (props.userState.user === null) {
        { console.log("HIT Signed Out") }
        < Redirect to='/' push={true} />
    } else {
        return (
            <button
                className={'btn-list'}
                onClick={(e) => props.logoutUser()}
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

const mapActionsToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser()),
    }
}

const mapStateToProps = (state) => {
    return {
        userState: state.userState
    }
}

export default connect(mapStateToProps, mapActionsToProps)(SignOut)