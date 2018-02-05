import React, { Component } from 'react';
import { ChatFeed, Message } from 'react-chat-ui'
import { Link } from 'react-router-dom';

import './Chat.css';

class Chat extends Component {
  state = {
      messages: [
    new Message({
      id: 1,
      message: "I'm the recipient! (The person you're talking to)",
    }), // Gray bubble
    new Message({ id: 0, message: "I'm you -- the blue bubble!" }), // Blue bubble
  ]
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log('Submitting');
  }

  render() {
    return (
      <main>
        <div className="row">
          <div className="col s12">
            <div id="chat-container">
              <div>
                <Link to="/explore/friends" className="btn-floating btn-large waves-effect waves-teal teal"><i className="material-icons">arrow_back</i></Link>
                <p id="chat-container-header" className="flow-text center-align">Your conversation history with XY</p>
              </div>
              <ChatFeed
                messages={this.state.messages}
                hasInputField={false}
                showSenderName
                bubblesCentered={false}
                bubbleStyles={bubbleStyles}
                >
                </ChatFeed>
            </div>
          </div>
          <form id="chat-message-input" onSubmit={e => this.handleSubmit(e)} className="col s10">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <input type="text" id="message"></input>
                <label htmlFor="message">Message</label>
              </div>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

 const bubbleStyles = {
   text: {
     fontSize: 30
   },
   chatbubble: {
     borderRadius: 70,
     padding: 40
   }
 }

export default Chat;
