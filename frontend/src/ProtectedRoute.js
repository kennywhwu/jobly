import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class ProtectedRoute extends Component {
  // For routes that require user to be logged in, redirect to /login route if not
  // For routes that require user to not be logged in, redirect to /companies route if logged in
  render() {
    if (this.props.isProtected) {
      if (this.props.currentUser === null) {
        return <Redirect to="/login" />;
      }
    } else {
      if (this.props.currentUser !== null) {
        return <Redirect to="/companies" />;
      }
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

export default ProtectedRoute;
