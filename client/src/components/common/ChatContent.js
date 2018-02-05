import React, { Component } from 'react';
import { ChatFeed, Message } from 'react-chat-ui'

class ChatContent extends Component {
  render() {
    return (
      <div className="chat-content">
        <ChatFeed
          messages={this.props.messages}
          hasInputField={false}
          showSenderName
          bubblesCentered={false}
          bubbleStyles={bubbleStyles}
          >
          </ChatFeed>
      </div>
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

export default ChatContent;
