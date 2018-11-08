// LoginForm form component for login and signup

import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handle change to user input boxes
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  // Handle submission of form
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleLogin(this.state);
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ margin: '10px auto 10px auto', width: '40%' }}
      >
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            id="username"
            onChange={this.handleChange}
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            onChange={this.handleChange}
            placeholder="Password"
          />
        </div>
        {this.props.type === 'signup' ? (
          <div>
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input
                className="form-control"
                type="text"
                name="first_name"
                id="first_name"
                onChange={this.handleChange}
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input
                className="form-control"
                type="text"
                name="last_name"
                id="last_name"
                onChange={this.handleChange}
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="text"
                name="email"
                id="email"
                onChange={this.handleChange}
                placeholder="Email"
              />
            </div>
          </div>
        ) : (
          undefined
        )}

        <button>Submit</button>
      </form>
    );
  }
}

export default LoginForm;
