import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class RequestListItem extends Component {
  handleClick() {
    this.props.acceptFriendRequest(this.props.auth, this.props.user)
  }

  render() {
    return(
      <div className="col s12 m6 l6 xl4">
        <div className="user-list-item-card card">
          <div className="card-image">
            <img className="user-list-item-card-image" src={this.props.user.image} alt=""/>
            <span className="card-title">{this.props.user.spotifyId}, {this.props.user.age}</span>
            <button onClick={this.handleClick.bind(this)} className="btn-floating halfway-fab waves-effect waves-teal teal lighten-2"><i className="material-icons">check</i></button>
          </div>
          <div className="card-content">
            <p>{this.props.user.about}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(RequestListItem);
