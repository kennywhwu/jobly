import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/">Logout</NavLink>
      </nav>
    );
  }
}

export default NavBar;
