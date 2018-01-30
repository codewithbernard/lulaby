import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import _ from 'lodash';

import UserListItem from './UserListItem';

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return _.map(this.props.users, user => {
      return <UserListItem key={user.spotifyId} user={user} />;
    });
  }

  render() {
    return(
      <main>
        <div className="row">
          {this.renderUsers()}
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps, actions)(UserList);
