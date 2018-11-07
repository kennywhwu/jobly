import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Login from './Login';
import Profile from './Profile';
import Home from './Home';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/companies" render={() => <Companies />} />
        <Route
          exact
          path="/companies/:handle"
          render={props => <Company {...props} />}
        />
        <Route exact path="/jobs" render={props => <Jobs {...props} />} />
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/profile" render={props => <Profile {...props} />} />
        <Route path="/" render={props => <Home {...props} />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
