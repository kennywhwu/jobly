// NavBar component for navigating pages

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        {this.props.currentUser !== null ? (
          // <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/companies">
                Companies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/jobs">
                Jobs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Logout
              </NavLink>
            </li>
          </ul>
        ) : (
          // </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        )}
      </nav>
    );
  }
}

export default NavBar;
