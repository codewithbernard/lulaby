import React, { Component } from 'react';

class RequestListItem extends Component {
  render() {
    return(
      <div className="col s12 m6 l6 xl4">
        <div className="user-list-item-card card">
          <div className="card-image">
            <img className="user-list-item-card-image" src={this.props.user.image} alt=""/>
            <span className="card-title">{this.props.user.spotifyId}, {this.props.user.age}</span>
            <button className="btn-floating halfway-fab waves-effect waves-teal teal lighten-2"><i className="material-icons">message</i></button>
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