// Routes component to define url renders

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Login from './Login';
import Profile from './Profile';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';

// PrivateRoute requires current user to be logged in, otherwise redirects to /login page
// LoggedInRoute requires current user to not be logged in, otherwise redirects to /companies page
class Routes extends Component {
  render() {
    return (
      <Switch>
        <ProtectedRoute
          exact
          path="/companies"
          isProtected={true}
          currentUser={this.props.currentUser}
          render={props => <Companies {...props} />}
        />
        <ProtectedRoute
          exact
          path="/companies/:handle"
          isProtected={true}
          currentUser={this.props.currentUser}
          render={props => (
            <Company
              {...props}
              triggerAlert={this.props.triggerAlert}
              fetchUser={this.props.fetchUser}
              currentUser={this.props.currentUser}
            />
          )}
        />
        <ProtectedRoute
          exact
          path="/jobs"
          isProtected={true}
          currentUser={this.props.currentUser}
          fetchUser={this.props.fetchUser}
          render={() => (
            <Jobs
              triggerAlert={this.props.triggerAlert}
              fetchUser={this.props.fetchUser}
              currentUser={this.props.currentUser}
            />
          )}
        />
        <ProtectedRoute
          exact
          path="/login"
          isProtected={false}
          currentUser={this.props.currentUser}
          render={props => (
            <Login
              {...props}
              fetchUser={this.props.fetchUser}
              triggerAlert={this.props.triggerAlert}
              type="login"
            />
          )}
        />
        <ProtectedRoute
          exact
          path="/signup"
          isProtected={false}
          currentUser={this.props.currentUser}
          render={props => (
            <Login
              {...props}
              fetchUser={this.props.fetchUser}
              triggerAlert={this.props.triggerAlert}
              type="signup"
            />
          )}
        />
        <ProtectedRoute
          exact
          path="/profile"
          isProtected={true}
          currentUser={this.props.currentUser}
          render={props => (
            <Profile
              {...props}
              fetchUser={this.props.fetchUser}
              currentUser={this.props.currentUser}
              triggerAlert={this.props.triggerAlert}
            />
          )}
        />
        <ProtectedRoute
          exact
          path="/logout"
          isProtected={true}
          currentUser={this.props.currentUser}
          render={props => (
            <Home
              {...props}
              logout={true}
              clearUser={this.props.clearUser}
              triggerAlert={this.props.triggerAlert}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Home
              {...props}
              logout={false}
              clearUser={this.props.clearUser}
              triggerAlert={this.props.triggerAlert}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
