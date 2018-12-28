import React from "react";
import { Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Stories from './stories';
import Share from './share';
import Participate from './participate';
import Dyslexia from "./dyslexia";

const Main = () => (
  <div className="main">
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
    <Route exact path='/stories' component={Stories}></Route>
    <Route exact path='/share' component={Share}></Route>
    <Route exact path='/participate' component={Participate}></Route>
    <Route exact path='/dyslexia' component={Dyslexia}></Route>
  </div>
  );

export default Main;