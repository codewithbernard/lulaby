import React, { Component } from 'react';
import NavLink from '../common/NavLink';
import { connect } from 'react-redux';

import './Sidenav.css';

class Sidenav extends Component {
  renderNotifications() {
    if (this.props.auth.friendRequests.length > 0) {
      return <span className="new badge">{this.props.auth.friendRequests.length}</span>;
    }
  }

  render() {
    if (this.props.auth) {
      return(
        <ul key="slide-out" id="slide-out" className="side-nav fixed">
          <li className="logo">
            <a id="logo-container" href="/explore#" className="brand-logo">
              <object id="front-page-logo" type="image/svg+xml" data="/logo.svg">Your browser does not support SVG</object>
            </a>
          </li>
          <NavLink className="waves-effect waves-teal" to="/explore/users"><i className="material-icons">whatshot</i> Find users</NavLink>
          <NavLink className="waves-effect waves-teal" to="/explore/requests"><i className="material-icons">notifications</i>{this.renderNotifications()} Friend requests</NavLink>
          <NavLink className="waves-effect waves-teal" to="/explore/me"><i className="material-icons">person</i> My profile</NavLink>
        </ul>
      );
    }
    return null;
  }
}

function mapStateToProps({auth}) {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Sidenav);
