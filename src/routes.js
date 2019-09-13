import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import House from './components/House';
import Wizard from './components/Wizard';


export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/add/header" component={Header} />
    <Route path="/add/dashboard" component={Dashboard} />
    <Route path="/add/house" component={House} />
    <Route path="/add/wizard" component={Wizard} />
  </Switch>
);
