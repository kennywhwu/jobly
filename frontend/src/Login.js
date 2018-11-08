import React, { Component } from 'react';
import LoginForm from './LoginForm';
import JoblyApi from './JoblyApi';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { type: 'login' };
    this.login = this.login.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  async login(user) {
    let token;
    // console.log(this.state.type);
    if (this.state.type === 'login') {
      token = await JoblyApi.login(user);
      console.log(token);
      this.props.triggerAlert('success', 'Successfully logged in!');
    } else {
      token = await JoblyApi.register(user);
    }
    this.setState({ token });
    localStorage.setItem('token', JSON.stringify(token));
    this.props.fetchUser();
    this.props.history.push('/companies');
  }

  changeType(evt) {
    this.setState({ type: evt.target.id });
  }

  render() {
    return (
      <div className="Login">
        <button onClick={this.changeType} id="login">
          Login
        </button>
        <button onClick={this.changeType} id="signup">
          Signup
        </button>
        <LoginForm handleLogin={this.login} type={this.state.type} />
      </div>
    );
  }
}

export default Login;
