import React, { Component } from 'react';
import LoginForm from './LoginForm';
import JoblyApi from './JoblyApi';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { type: 'login' };
    this.login = this.login.bind(this);
  }

  async login(user) {
    let token = await JoblyApi.login(user);
    this.setState({ token });
    localStorage.setItem('token', JSON.stringify(token));
    this.props.fetchUser();
    this.props.history.push('/companies');
  }

  render() {
    return (
      <div className="Login">
        <LoginForm handleLogin={this.login} type={this.state.type} />
      </div>
    );
  }
}

export default Login;
