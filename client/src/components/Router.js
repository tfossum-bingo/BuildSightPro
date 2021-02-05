import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'

import {getUser} from '../store/actions/UserActions'

import CompanyPage from '../pages/CompanyPage'
import JobsitesPage from '../pages/JobsitesPage'
import JobsitePage from '../pages/JobsitePage'
import LandingPage from '../pages/LandingPage'
import ProtectedRoute from './ProtectedRoute'
import SignInPage from '../pages/SignInPage'
import SignUpPage from '../pages/SignUpPage'


import '../styles/App.css'

const Router = (props) => {
    // const [localUserId, setLocalUserId] = useState(null)
    const [authenticated, setAuthenticated] = useState(false)

    const luid = localStorage.getItem("userId")

    useEffect(() => {
        if (luid !== null && props.userState.user === null) {
            props.getUser(luid)
        }
    })

    const checkAuthenticated = () => {
        if (luid !== null) {
            return true
        }
        return false
    }

    return (
        <main>
            <Switch>
                <Route exact path='/' component={(props) => <LandingPage/>}/>
                <Route
                    exact
                    path='/register'
                    component={(props) => <SignUpPage/>}
                />
                <Route
                    exact
                    path='/company'
                    component={(props) => <CompanyPage/>}
                />
                <Route
                    exact
                    path='/signin'
                    component={(props) => <SignInPage/>}
                />
                <ProtectedRoute
                    authenticated={checkAuthenticated()}
                    exact path='/jobsites'
                    component={(props) => (
                        <JobsitesPage/>
                    )}
                />
                <ProtectedRoute
                    authenticated={checkAuthenticated()}
                    exact path='/jobsites/:jobsite_id'
                    component={(props) => (
                        <JobsitePage {...props} />
                    )}
                />
            </Switch>
        </main>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        getUser: (userId) => dispatch(getUser(userId))

    }
}

const mapStateToProps = (state) => {
    return {
        userState: state.userState
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Router)