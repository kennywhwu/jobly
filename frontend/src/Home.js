import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  // Clear user from local storage and App's state, and trigger success alert when component mounts
  componentDidMount() {
    this.props.clearUser();
  }

  render() {
    return <div className="Home">Home</div>;
  }
}

export default Home;
