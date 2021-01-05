import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
// import ProtectedRoute from './ProtectedRoute'

import {__GetUser} from '../services/UserService';

import '../styles/App.css';

export default function Router() {
    const [user, setUser] = useState(null);
    const [needsRefresh, setNeedsRefresh] = useState(false)

    const retrieveUser = async (user_id) => {
        try {
            const x = await __GetUser();
            setUser(x);
            return x;
        } catch (error) {
        }
    }

    if ((user === null) || needsRefresh) {
        setNeedsRefresh(false)
        const retrievedAccounts = retrieveUser();
        setUser(retrievedAccounts);
    }

    return (
        <main>
            <Switch>
                <Route exact path='/' component={(props) => <LandingPage {...props} profiles={user}/>}/>
                <Route
                    exact
                    path='/register'
                    component={(props) => <SignUpPage {...props} setUser={setUser}/>}
                />
                <Route
                    exact
                    path='/signin'
                    component={(props) => <SignInPage {...props} setUser={setUser}/>}
                />
                {/* <ProtectedRoute
                    authenticated={account !== null}
                    path='/home'
                    component={(props) => (.
                        <Home
                            {...props}
                            account={account}
                            onClickSignOut={clearAccount}
                            setNeedsRefresh={setNeedsRefresh}/>
                    )}
                /> */}
            </Switch>
        </main>
    );
}
