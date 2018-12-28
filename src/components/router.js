import React from "react";
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Dyslexia from './dyslexia';
import Stories from '.stories';
import Participate from './participate';
import Share from "./share";

const Router = () => (
    <Switch>
      <Route path='/' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/stories' component={Stories}></Route>
      <Route path='/contact' component={Contact}></Route>
      <Route path='/dyslexia' component={Dyslexia}></Route>
      <Route path='/participate' component={Participate}></Route>
      <Route path='/share' component={Share}></Route>
    </Switch>
  );

export default Router;