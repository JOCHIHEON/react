import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import Body from './Body.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Body/>
        <Pfooter/>
      </div>
    );
  }
}

export default App;
