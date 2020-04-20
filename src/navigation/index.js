import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from '../pages/Logon';
import HomeRoutes from './navitarion-home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Logon}/>
                <Route exact path="/home" component={HomeRoutes}/>
            </Switch>
        </BrowserRouter>
    )
}