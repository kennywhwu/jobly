// NavBar component for navigating pages

import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar color="primary" dark expand="md" className="Navbar sticky-top">
        <NavbarToggler onClick={this.toggle} />
        <NavbarBrand href="/">Jobly</NavbarBrand>
        {this.props.currentUser !== null && (
          <span className="text-white">
            Welcome,{' '}
            <Link to="/profile">{this.props.currentUser.username}</Link>
          </span>
        )}
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {this.props.currentUser !== null ? (
              <>
                <NavItem>
                  <NavLink href="/companies">Companies</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/jobs">Jobs</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact="true" href="/logout">
                    Logout
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup" className="active">
                    Signup
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
