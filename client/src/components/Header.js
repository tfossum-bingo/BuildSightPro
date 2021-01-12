import React, { useState } from 'react'
import { connect } from 'react-redux'
import Menu from '../components/Menu'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Header = (props) => {
    const { user } = props.userState
    const [displayMenu, setDisplayMenu] = useState(false)


    const toggleMenu = () => {
        setDisplayMenu(!displayMenu)
    }

    return (
        <div className="header">
            <div className='logo-box'>
                <h1 className='header-logo'>BuildSightPro.com</h1>
            </div>
            <div className="flex-row">
                <div className='menu-box' onClick={toggleMenu} >
                    <FontAwesomeIcon
                        onClick={() => toggleMenu()}
                        className="fas fa-white menu-bars"
                        // style={{ color: "lightgray" }}
                        icon={faBars}
                    />
                </div>
                <Menu
                    displayMenu={displayMenu}
                    user={user}
                    onClick={toggleMenu} />
            </div>
        </div>
    )
}

const mapActionsToProps = (dispatch) => {
    return {

    }
}

const mapStateToProps = (state) => {
    return {
        userState: state.userState
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Header)