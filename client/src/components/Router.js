import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import JobsitesPage from '../pages/JobsitesPage';
import JobsitePage from '../pages/JobsitePage'
import LandingPage from '../pages/LandingPage';
import ProtectedRoute from './ProtectedRoute'
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';


import '../styles/App.css';

const Router = (props) => {
    
    return (
        <main>
            <Switch>
                <Route exact path='/' component={(props) => <LandingPage />} />
                <Route
                    exact
                    path='/register'
                    component={(props) => <SignUpPage />}
                />
                <Route
                    exact
                    path='/signin'
                    component={(props) => <SignInPage />}
                />
                <ProtectedRoute
                    authenticated={props.userState.user !== null}
                    exact path='/jobsites'
                    component={(props) => (
                        <JobsitesPage />
                    )}
                />
                <ProtectedRoute
                    authenticated={props.userState.user !== null}
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

    }
  }
  
  const mapStateToProps = (state) => {
    // console.log('MapStateToProps: ', state)
    return {
        userState: state.userState
    }
  }
  
  export default connect(mapStateToProps, mapActionsToProps)(Router)