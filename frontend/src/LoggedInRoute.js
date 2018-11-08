import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class LoggedInRoute extends Component {
  // Redirect to /companies if a logged in user tries to access /login page
  render() {
    if (this.props.currentUser !== null) {
      return <Redirect to="/companies" />;
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

export default LoggedInRoute;
