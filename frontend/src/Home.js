import React, { Component } from 'react';
import './App.css';
import { Jumbotron } from 'reactstrap';

class Home extends Component {
  // Clear user from local storage and App's state, and trigger success alert when component mounts
  componentDidMount() {
    if (this.props.logout) {
      this.props.clearUser();
    }
  }

  render() {
    return (
      <div className="Home">
        <Jumbotron>
          <h1>Welcome to Jobly</h1>
          <h4>The last place you'll need to look for a job</h4>
          <br />
          <img
            id="homepage-banner"
            src="/homepage_banner.png"
            alt="homepage banner"
          />
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
