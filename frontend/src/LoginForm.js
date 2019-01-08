// LoginForm form component for login and signup

import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handle change to user Input boxes
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  // Handle submission of form
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleLogin(this.state);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup row className="form-group">
          <Label htmlFor="username">Username</Label>
          <Input
            className="form-control"
            type="text"
            name="username"
            id="username"
            onChange={this.handleChange}
            placeholder="Username"
          />
        </FormGroup>
        <FormGroup row className="form-group">
          <Label htmlFor="password">Password</Label>
          <Input
            className="form-control"
            type="password"
            name="password"
            id="password"
            onChange={this.handleChange}
            placeholder="Password"
          />
        </FormGroup>
        {this.props.type === 'signup' ? (
          <div>
            <FormGroup row className="form-group">
              <Label htmlFor="first_name">First Name</Label>
              <Input
                className="form-control"
                type="text"
                name="first_name"
                id="first_name"
                onChange={this.handleChange}
                placeholder="First Name"
              />
            </FormGroup>
            <FormGroup row className="form-group">
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                className="form-control"
                type="text"
                name="last_name"
                id="last_name"
                onChange={this.handleChange}
                placeholder="Last Name"
              />
            </FormGroup>
            <FormGroup row className="form-group">
              <Label htmlFor="email">Email</Label>
              <Input
                className="form-control"
                type="text"
                name="email"
                id="email"
                onChange={this.handleChange}
                placeholder="Email"
              />
            </FormGroup>
          </div>
        ) : (
          undefined
        )}

        <Button color="info">Submit</Button>
      </Form>
    );
  }
}

export default LoginForm;
