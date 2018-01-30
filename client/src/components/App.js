import 'materialize-css/dist/js/materialize.min.js';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './landing/Landing';
import UserList from './explore/UserList';
import Navbar from './explore/Navbar';
import Sidenav from './explore/Sidenav';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/explore" component={Navbar} />
          <Route path="/explore" component={Sidenav} />
          <Route path="/explore/users" component={UserList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
