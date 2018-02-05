import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RequestListItem extends Component {
  render() {
    return(
      <div className="col s12 m6 l6 xl4">
        <div className="user-list-item-card card">
          <div className="card-image">
            <img className="user-list-item-card-image" src={this.props.user.image} alt=""/>
            <span className="card-title truncate">{this.props.user.spotifyId}, {this.props.user.age}</span>
            <Link to={`/explore/chat/${this.props.user.spotifyId}`} className="btn-floating halfway-fab waves-effect waves-teal teal lighten-2"><i className="material-icons">message</i></Link>
          </div>
          <div className="card-content">
            <p>{this.props.user.about}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RequestListItem;
