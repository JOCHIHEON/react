import React, { Component } from 'react';
import './App.css';
import FullPageIntroWithFixedNavbar from './Nav.js';
import Body from './Body.js';
import FooterPage from './Footer';
import ChatWidget from './ChatWidget';

class App extends Component {
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
  }
  render() {
    return (
      <div className="App">
        <FullPageIntroWithFixedNavbar/>
        <ChatWidget />
        <Body/>
        <FooterPage/>
      </div>
    );
  }
}

export default App;
