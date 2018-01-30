import React, { Component } from 'react';

import './Sidenav.css';

class Sidenav extends Component {
  render() {
    return[
      <ul id="slide-out" className="side-nav fixed">
        <li className="logo"><a id="logo-container" href="/explore#" class="brand-logo">
        <object id="front-page-logo" type="image/svg+xml" data="logo.svg">Your browser does not support SVG</object></a></li>
        <li><a href="#!"><i class="material-icons">whatshot</i> Look around</a></li>
        <li><a href="#!"><i class="material-icons">person</i> My profile</a></li>
      </ul>,
      <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
    ];
  }
}

export default Sidenav;
