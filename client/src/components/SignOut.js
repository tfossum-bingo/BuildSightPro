import React, { useState } from "react";
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { logoutUser } from '../store/actions/UserActions'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const SignOut =  ({ children, type, onClick, buttonStyle, buttonSize }) => {
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

const mapActionsToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser()),
  
    }
  }
  
  const mapStateToProps = (state) => {
    // console.log('MapStateToProps: ', state)
    return {
        userState: state.userState
    }
  }
  
  export default connect(mapStateToProps, mapActionsToProps)(SignOut)