import React from "react";
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="/">Dysxie</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/'><i className="material-icons">home</i></Link>
        </li>
        <li className="nav-item">
          <Link to='/about'>A propos</Link>
        </li>
        <li className="nav-item">
          <Link to='/dyslexia'>La Dyslexia</Link>
        </li>
        <li className="nav-item">
          <Link to='/stories'>Mes histoires</Link>
        </li>
        <li className="nav-item">
          <Link to='/share'>Partager</Link>
        </li>
        <li className="nav-item">
          <Link to='/participate'>Participer</Link>
        </li>
        <li className="nav-item">
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;