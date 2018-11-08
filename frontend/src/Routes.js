// Routes component to define url renders

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Login from './Login';
import Profile from './Profile';
import Home from './Home';
import PrivateRoute from './PrivateRoute';
import LoggedInRoute from './LoggedInRoute';

class Routes extends Component {
  render() {
    console.log('Routes ran', this.props.currentUser);
    return (
      <Switch>
        <PrivateRoute
          exact
          path="/companies"
          currentUser={this.props.currentUser}
          render={props => <Companies {...props} />}
        />
        <PrivateRoute
          exact
          path="/companies/:handle"
          currentUser={this.props.currentUser}
          render={props => <Company {...props} />}
        />
        <PrivateRoute
          exact
          path="/jobs"
          currentUser={this.props.currentUser}
          render={() => <Jobs />}
        />
        <Route
          exact
          path="/login"
          currentUser={this.props.currentUser}
          render={props => (
            <Login {...props} fetchUser={this.props.fetchUser} />
          )}
        />
        <PrivateRoute
          exact
          path="/profile"
          currentUser={this.props.currentUser}
          render={props => <Profile {...props} />}
        />
        <Route exact path="/" render={props => <Home {...props} />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
