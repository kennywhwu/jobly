// ProfileUpdateForm form component for login and signup

import React, { Component } from 'react';

class ProfileUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser.username,
      password: '',
      first_name: this.props.currentUser.first_name,
      last_name: this.props.currentUser.last_name,
      email: this.props.currentUser.email,
      photo_url: this.props.currentUser.photo_url
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
    this.props.handleProfileUpdate(this.state);
  }

  render() {
    const user = this.props.currentUser;
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ margin: '10px auto 10px auto', width: '40%' }}
      >
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <p>{user.username}</p>
        </div>

        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            className="form-control"
            type="text"
            name="first_name"
            id="first_name"
            onChange={this.handleChange}
            value={this.state.first_name}
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
            value={this.state.last_name}
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
            value={this.state.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="photo_url">Photo URL</label>
          <input
            className="form-control"
            type="photo_url"
            name="photo_url"
            id="photo_url"
            onChange={this.handleChange}
            value={this.state.photo_url || ''}
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
          />
        </div>

        <button>Submit</button>
      </form>
    );
  }
}

export default ProfileUpdateForm;
