import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../../actions';

import './UserListItem.css';

class UserListItem extends Component {
  async handleButtonClick() {
    await axios.get(`/api/friendRequest/${this.props.user.spotifyId}`);
    this.props.fetchUsers();
  }

  // Check if friend request was already sent
  isFriendRequested() {
    return this.props.user.friendRequests.filter(user => user.spotifyId === this.props.auth.spotifyId).length > 0;
  }

  isFriend() {
    return this.props.auth.friends.filter(user => user.spotifyId === this.props.user.spotifyId).length > 0;
  }

  // Check if user already sent friend request to you
  friendRequestedYou() {
    return this.props.auth.friendRequests.filter(user => user.spotifyId === this.props.user.spotifyId).length > 0;
  }

  render() {
    if (!this.friendRequestedYou() && !this.isFriend()) {
      return(
        <div className="col s12 m6 l6 xl4">
          <div className="user-list-item-card card">
            <div className="card-image">
              <img className="user-list-item-card-image" src={this.props.user.image} alt=""/>
              <span className="card-title">{this.props.user.spotifyId}, {this.props.user.age}</span>
              <button onClick={this.handleButtonClick.bind(this)} className={`btn-floating halfway-fab waves-effect waves-teal teal lighten-2 ${this.isFriendRequested() ? "disabled" : null}`}><i className="material-icons">person_add</i></button>
            </div>
            <div className="card-content">
              <p>{this.props.user.about}</p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps({auth}) {
  return {
    auth
  };
}

export default connect(mapStateToProps, actions)(UserListItem);
