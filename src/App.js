import React, { Component } from 'react'
import './App.css';

import Navigation from './components/navigation';
import Main from './components/main';


class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
