import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';
 
import logo from './logo.svg';
 
class ChatWidget extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }
 
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }
 
  render() {
    return (
      <div className="ChatWidget">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="실시간 채팅방"
          subtitle="자유롭게 대화를 나누세요."
        />
      </div>
    );
  } 
}
 
export default ChatWidget;