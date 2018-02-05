import React, { Component } from 'react';
import { ChatFeed, Message } from 'react-chat-ui'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import socket from '../../socket';
import { animateScroll } from "react-scroll";
import * as actions from '../../actions'

import './Chat.css';

class Chat extends Component {
  state = {
    messageText: ''
  }

  componentWillMount() {
    this.props.fetchMessages(this.props.match.params.id);
  }

  componentDidMount() {
    socket.on(`notify - message ${this.props.user.spotifyId}`, msg => {
      this.props.fetchMessages(this.props.match.params.id);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendMessage(this.props.match.params.id, this.state.messageText);
    this.setState({messageText: ''});
  }

  render() {
    return (
      <main>
        <div className="row">
          <div className="col s12">
            <div id="chat-header">
              <Link to="/explore/friends" className="btn-floating btn-large waves-effect waves-teal teal"><i className="material-icons">arrow_back</i></Link>
              <p id="chat-header-text" className="flow-text center-align">Your conversation history with XY</p>
            </div>
            <div id="chat-container" >
              <ChatFeed
                messages={this.props.messages}
                hasInputField={false}
                showSenderName
                bubblesCentered={false}
                bubbleStyles={bubbleStyles}
                >
                </ChatFeed>
            </div>
          </div>
          <form id="chat-message-input" onSubmit={e => this.handleSubmit(e)} className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <input type="text" id="message" onChange={e => this.setState({messageText: e.target.value})} value={this.state.messageText}></input>
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

 function mapStateToProps(state) {
   return {
     messages: state.message,
     user: state.auth
   }
 }

export default connect(mapStateToProps, actions)(Chat);
