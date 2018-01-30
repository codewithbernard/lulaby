import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return(
      <header>
        <nav className="white-text teal lighten-1">
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>Logged in as user</li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
