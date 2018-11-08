import React, { Component } from 'react';
import LoginForm from './LoginForm';
import JoblyApi from './JoblyApi';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.login = this.login.bind(this);
  }

  async login(user) {
    console.log('login ran', user);
    let token = await JoblyApi.login(user);
    this.setState({ token });
    localStorage.setItem('token', JSON.stringify({ token }));
    console.log(
      'pull localstorage ',
      JSON.parse(localStorage.getItem('token'))
    );
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="Login">
        <LoginForm handleLogin={this.login} />
      </div>
    );
  }
}

export default Login;
