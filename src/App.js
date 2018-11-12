import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import Body from './Body.js';
import FooterPage from './Footer';
import Kblbodyas from './Kblbody';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Body/>
        <Kblbodyas/>
        <FooterPage/>
      </div>
    );
  }
}

export default App;
