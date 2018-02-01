import React, { Component } from 'react';
import NavLink from '../common/NavLink';

import './Sidenav.css';

class Sidenav extends Component {
  render() {
    return(
      <ul key="slide-out" id="slide-out" className="side-nav fixed">
        <li className="logo">
          <a id="logo-container" href="/explore#" className="brand-logo">
            <object id="front-page-logo" type="image/svg+xml" data="/logo.svg">Your browser does not support SVG</object>
          </a>
        </li>
        <NavLink className="waves-effect waves-teal" to="/explore/users"><i className="material-icons">whatshot</i> Find users</NavLink>
        <NavLink className="waves-effect waves-teal" to="/explore/requests"><i className="material-icons">notifications</i><span className="new badge">4</span> Friend requests</NavLink>
        <NavLink className="waves-effect waves-teal" to="/explore/me"><i className="material-icons">person</i> My profile</NavLink>
      </ul>
    );
  }
}

export default Sidenav;
