import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import ProfileUpdateForm from './ProfileUpdateForm';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
  }

  async handleProfileUpdate(user) {
    try {
      let updatedUser = await JoblyApi.updateUser(
        user,
        this.props.currentUser.username
      );
      if (updatedUser) {
        this.props.fetchUser();
        this.props.triggerAlert('success', 'Updated profile!');
        this.props.history.push('/companies');
      }
    } catch (err) {
      this.props.triggerAlert('danger', err[0]);
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
