import React from "react";
import { Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';

const Main = () => (
  <div classNameName="main">
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
  </div>
  );

export default Main;