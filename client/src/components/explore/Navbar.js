import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <header>
        <nav className="white-text teal lighten-1">
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link className="white-text" to="/TBD"><i className="material-icons">exit_to_app</i></Link></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
