import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import ProfileUpdateForm from './ProfileUpdateForm';

class Profile extends Component {
  async handleProfileUpdate(profile) {
    let user = await JoblyApi.updateUser(profile);
    if (user) {
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
