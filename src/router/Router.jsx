import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import crearPersona from '../pages/crearPersona';
import Persona from '../pages/persona';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Persona}/>
                <Route path="/crearPersona" component={crearPersona}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;