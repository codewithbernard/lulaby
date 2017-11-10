import 'materialize-css/dist/js/materialize.min.js';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './landing/Landing';
import UserList from './explore/UserList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route path="/explore" component={UserList} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
