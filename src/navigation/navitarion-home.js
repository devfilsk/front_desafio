import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Header from '../components/Header';
import Cadastro from '../pages/Cadastro';

export default function HomeRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route path="/cadastrar" component={Cadastro}/>
            </Switch>
        </BrowserRouter>
    )
}