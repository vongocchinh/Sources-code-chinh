import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './Login';
import Page from './Page';

export default function Routers() {
    return (
        <Switch>
            <Route component={Page} path="/" exact={true} />
            <Route component={Login} path="/login"  />
        </Switch>
    )
}
