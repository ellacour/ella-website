import React from "react";
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

const Router = () => (
    <Switch>
      <Route path='/' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/contact' component={Contact}></Route>
    </Switch>
  );

export default Router;