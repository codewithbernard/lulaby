import 'materialize-css/dist/js/materialize.min.js';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './landing/Landing';
import UserList from './explore/UserList';
import Navbar from './explore/Navbar';
import Sidenav from './explore/Sidenav';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/explore" component={Navbar} />
          <Route path="/explore" component={Sidenav} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
