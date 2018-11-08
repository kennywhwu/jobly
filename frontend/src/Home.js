import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  componentDidMount() {
    localStorage.removeItem('token');
    this.props.clearUser();
  }

  render() {
    return <div className="Home">Home</div>;
  }
}

export default Home;
