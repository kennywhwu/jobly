// NavBar component for navigating pages

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav>
        {this.props.currentUser !== null ? (
          <span>
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/">Logout</NavLink>
          </span>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    );
  }
}

export default NavBar;
