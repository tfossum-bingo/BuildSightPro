import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
// import SignUpPage from '../Pages/SignUpPage';
// import SignInPage from '../Pages/SignInPage';
// import ProtectedRoute from './ProtectedRoute'

import {__GetProfiles} from '../services/UserService';

import '../styles/App.css';

export default function Router() {
    const [accounts, setAccounts] = useState(null);
    const [needsRefresh, setNeedsRefresh] = useState(false)

    const retrieveAccounts = async () => {
        try {
            const x = await __GetProfiles();
            setAccounts(x);
            return x;
        } catch (error) {
        }
    }

    if ((accounts === null) || needsRefresh) {
        setNeedsRefresh(false)
        const retrievedAccounts = retrieveAccounts();
        setAccounts(retrievedAccounts);
    }

    return (
        <main>
            <Switch>
                <Route exact path='/' component={(props) => <LandingPage {...props} profiles={accounts}/>}/>
                {/* <Route
                    exact
                    path='/register'
                    component={(props) => <SignUpPage {...props} setAccount={setAccount}/>}
                />
                <Route
                    exact
                    path='/signin'
                    component={(props) => <SignInPage {...props} setAccount={setAccount}/>}
                />
                <ProtectedRoute
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
