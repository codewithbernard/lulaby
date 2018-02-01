import React, { Component } from 'react';
import axios from 'axios';

import './UserListItem.css';

class UserListItem extends Component {
  handleButtonClick() {
    axios.get(`/api/notify/${this.props.user.spotifyId}`);
  }

  render() {
    return(
      <div className="col s12 m6 l6 xl4">
        <div className="user-list-item-card card">
          <div className="card-image">
            <img className="user-list-item-card-image" src={this.props.user.image} alt=""/>
            <span className="card-title">{this.props.user.spotifyId}, {this.props.user.age}</span>
            <button onClick={this.handleButtonClick.bind(this)} className="btn-floating halfway-fab waves-effect waves-teal teal lighten-2"><i className="material-icons">message</i></button>
          </div>
          <div className="card-content">
            <p>{this.props.user.about}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserListItem;
