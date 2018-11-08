import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    console.log('PrivateRoute ran', this.props.currentUser);
    if (this.props.currentUser === null) {
      console.log('currentUser null');
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
