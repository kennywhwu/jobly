import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class LoggedInRoute extends Component {
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
