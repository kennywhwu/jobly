import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';
import JoblyApi from './JoblyApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null };
    this.fetchUser = this.fetchUser.bind(this);
  }

  async componentDidMount() {
    // localStorage.removeItem('token');
    console.log('localStorage token', localStorage.getItem('token'));
    let token = JSON.parse(localStorage.getItem('token'));

    if (token !== null) {
      let payload = jwt.decode(token.token);
      let currentUser = await JoblyApi.getUser(payload.username);
      this.setState({ currentUser });
    }
  }

  async fetchUser() {
    let token = JSON.parse(localStorage.getItem('token'));
    console.log('token ', token);
    if (token !== null) {
      let payload = jwt.decode(token);
      console.log('payload ', payload);
      let currentUser = await JoblyApi.getUser(payload.username);
      console.log('currentUser ', currentUser);
      this.setState({ currentUser });
      console.log('fetchUser ran ', this.state.currentUser);
    }
  }

  render() {
    console.log('App ran', this.state.currentUser);
    return (
      <div className="App">
        <NavBar currentUser={this.state.currentUser} />
        <Routes
          currentUser={this.state.currentUser}
          fetchUser={this.fetchUser}
        />
      </div>
    );
  }
}

export default App;
