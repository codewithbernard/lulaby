import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import RequestListItem from './RequestListItem';

class RequestList extends Component {
  renderUsers() {
    return _.map(this.props.auth.friendRequests, user => {
      return <RequestListItem key={user.spotifyId} user={user} auth={this.props.auth}/>;
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

function mapStateToProps({auth}) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(RequestList);
