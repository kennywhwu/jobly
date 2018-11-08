import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  // Private Route for routes that require user to be logged in; otherwise redirects to login page
  render() {
    if (this.props.currentUser === null) {
      return <Redirect to="/login" />;
    }
    return (
      <Route
        path={this.props.path}
        exact={this.props.exact}
        render={this.props.render}
      />
    );
  }
}

export default PrivateRoute;
