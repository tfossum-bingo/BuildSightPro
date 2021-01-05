import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';
import ProtectedRoute from './ProtectedRoute'
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';

import { __GetUser } from '../services/UserService';

import '../styles/App.css';

export default function Router() {
    const [user, setUser] = useState(null);
    const [needsRefresh, setNeedsRefresh] = useState(false)

    const localUserId = localStorage.getItem('user_id');

    const retrieveUser = async (user_id) => {
        try {
            const x = await __GetUser();
            setUser(x);
            return x;
        } catch (error) {
        }
    }

    if ((user === null && localUserId !== null) || needsRefresh) {
        console.log("Refreshing User")
        setNeedsRefresh(false)
        const retrievedUser = retrieveUser();
        setUser(retrievedUser);
    }

    const clearUser = () => {
        console.log("HIT clearUser()")
        setNeedsRefresh(false)
        setUser(null);
    };

    return (
        <main>
            <Switch>
                <Route exact path='/' component={(props) => <LandingPage />} />
                <Route
                    exact
                    path='/register'
                    component={(props) => <SignUpPage {...props} setUser={setUser} />}
                />
                <Route
                    exact
                    path='/signin'
                    component={(props) => <SignInPage {...props} setUser={setUser} />}
                />
                <ProtectedRoute
                    authenticated={user !== null}
                    path='/home'
                    component={(props) => (
                        <HomePage
                            {...props}
                            user={user}
                            onClickSignOut={clearUser}
                            setNeedsRefresh={setNeedsRefresh} />
                    )}
                />
            </Switch>
        </main>
    );
}
