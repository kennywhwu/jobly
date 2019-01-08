import React, { Component } from 'react';
import { Button } from 'reactstrap';
import LoginForm from './LoginForm';
import JoblyApi from './JoblyApi';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { type: props.type };
    this.login = this.login.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  // Login or sign up based on current state
  async login(user) {
    let token;
    if (this.state.type === 'login') {
      // Log in user based on credentials
      try {
        token = await JoblyApi.login(user);
        this.props.triggerAlert('success', 'Successfully logged in!');
      } catch (err) {
        this.props.triggerAlert('danger', err[0]);
      }
    } else {
      // Register new user based on entered information
      try {
        token = await JoblyApi.register(user);
        this.props.triggerAlert('success', 'Successfully registered!');
      } catch (err) {
        this.props.triggerAlert('danger', err[0]);
      }
    }
    // If login or registration successful, set token in state and local storage, and fetch user to store in App's state
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
      this.props.fetchUser();
      // Redirect to companies after successful login/registration
      this.props.history.push('/companies');
    }
  }

  // Flip from login to registration
  changeType(evt) {
    this.setState({ type: evt.target.id });
  }

  render() {
    return (
      <div className="Login">
        <Button color="primary" outline onClick={this.changeType} id="login">
          Login
        </Button>
        <Button color="primary" onClick={this.changeType} id="signup">
          Signup
        </Button>
        <LoginForm handleLogin={this.login} type={this.state.type} />
      </div>
    );
  }
}

export default Login;
