import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import _ from 'lodash';

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return _.map(this.props.users, user => {
      return(
        <li key={user.spotifyId}>{user.spotifyId}</li>
      )
    });
  }

  render() {
    return(
      <ul>{this.renderUsers()}</ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps, actions)(UserList);
