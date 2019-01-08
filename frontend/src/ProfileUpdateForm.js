// ProfileUpdateForm form component for login and signup

import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ProfileUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      first_name: this.props.currentUser.first_name,
      last_name: this.props.currentUser.last_name,
      email: this.props.currentUser.email,
      photo_url: this.props.currentUser.photo_url || undefined,
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
    this.props.handleProfileUpdate(this.state);
  }

  render() {
    const user = this.props.currentUser;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Label htmlFor="username">Username</Label>
          <Input
            className="form-control"
            plaintext
            name="user_name"
            id="user_name"
            value={user.username}
          />
        </FormGroup>

        <FormGroup row>
          <Label htmlFor="first_name">First Name</Label>
          <Input
            className="form-control"
            type="text"
            name="first_name"
            id="first_name"
            onChange={this.handleChange}
            value={this.state.first_name}
          />
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="last_name">Last Name</Label>
          <Input
            className="form-control"
            type="text"
            name="last_name"
            id="last_name"
            onChange={this.handleChange}
            value={this.state.last_name}
          />
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="email">Email</Label>
          <Input
            className="form-control"
            type="text"
            name="email"
            id="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </FormGroup>

        <FormGroup row>
          <Label htmlFor="photo_url">Photo URL</Label>
          <Input
            className="form-control"
            type="photo_url"
            name="photo_url"
            id="photo_url"
            onChange={this.handleChange}
            value={this.state.photo_url || ''}
          />
        </FormGroup>
        <FormGroup row>
          <Label htmlFor="password">Password</Label>
          <Input
            className="form-control"
            type="password"
            name="password"
            id="password"
            onChange={this.handleChange}
          />
        </FormGroup>

        <Button color="info">Submit</Button>
      </Form>
    );
  }
}

export default ProfileUpdateForm;
