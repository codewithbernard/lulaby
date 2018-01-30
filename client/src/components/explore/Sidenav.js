import React, { Component } from 'react';
import NavLink from '../common/NavLink';

import './Sidenav.css';

class Sidenav extends Component {
  render() {
    return(
      <ul key="slide-out" id="slide-out" className="side-nav fixed">
        <li className="logo"><a id="logo-container" href="/explore#" className="brand-logo"><img id="logo-container-image" src="/logo.svg"/></a></li>
        <NavLink className="waves-effect waves-teal" to="/explore/users"><i className="material-icons">whatshot</i> Look around</NavLink>
        <NavLink className="waves-effect waves-teal" to="/explore/me"><i className="material-icons">person</i> My profile</NavLink>
      </ul>
    );
  }
}

export default Sidenav;
