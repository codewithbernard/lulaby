import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
  renderUsers() {
    return _.map(this.props.auth.friends, user => {
      return <FriendListItem key={user.spotifyId} user={user} auth={this.props.auth}/>;
    });
  }

  render() {
    if (this.props.auth) {
      return(
        <main>
          <div className="row">
            {this.renderUsers()}
          </div>
        </main>
      );
    }
    return null;
  }
}

function mapStateToProps({auth}) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(FriendList);
