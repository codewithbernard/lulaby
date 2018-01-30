import React, { Component } from 'react';
import NavLink from '../common/NavLink';

import './Sidenav.css';

class Sidenav extends Component {
  render() {
    return[
      <ul id="slide-out" className="side-nav fixed">
        <li className="logo"><a id="logo-container" href="/explore#" class="brand-logo">
        <object id="front-page-logo" type="image/svg+xml" data="logo.svg">Your browser does not support SVG</object></a></li>
        <NavLink className="waves-effect waves-teal" to="/explore/users"><i class="material-icons">whatshot</i> Look around</NavLink>
        <NavLink className="waves-effect waves-teal" to="/explore/me"><i class="material-icons">person</i> My profile</NavLink>
      </ul>,
      <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
    ];
  }
}

export default Sidenav;
