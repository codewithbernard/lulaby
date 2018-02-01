import 'materialize-css/dist/js/materialize.min.js';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import io from 'socket.io-client';

import requireAuth from './auth/requireAuth';
import Landing from './landing/Landing';
import UserList from './explore/UserList';
import Navbar from './explore/Navbar';
import Sidenav from './explore/Sidenav';
import MyProfile from './explore/MyProfile';

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
    const socket = io(`http://localhost:${process.env.PORT || 5000}`);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/explore" component={requireAuth(Navbar)} />
          <Route path="/explore" component={requireAuth(Sidenav)} />
          <Route path="/explore/users" component={requireAuth(UserList)} />
          <Route path="/explore/me" component={requireAuth(MyProfile)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
