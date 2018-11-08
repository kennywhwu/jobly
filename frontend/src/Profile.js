import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import ProfileUpdateForm from './ProfileUpdateForm';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
  }

  async handleProfileUpdate(user) {
    let updatedUser = await JoblyApi.updateUser(
      user,
      this.props.currentUser.username
    );
    if (updatedUser) {
      this.props.fetchUser();
      this.props.history.push('/companies');
    }
  }

  render() {
    return (
      <div className="Profile">
        <ProfileUpdateForm
          handleProfileUpdate={this.handleProfileUpdate}
          currentUser={this.props.currentUser}
        />
      </div>
    );
  }
}

export default Profile;
