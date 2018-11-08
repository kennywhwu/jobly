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
    this.state = { currentUser: null, isLoading: true };
    this.fetchUser = this.fetchUser.bind(this);
    this.clearUser = this.clearUser.bind(this);
  }

  async componentDidMount() {
    this.fetchUser();
  }

  async fetchUser() {
    let token = JSON.parse(localStorage.getItem('token'));
    if (token !== null) {
      let payload = jwt.decode(token);
      let currentUser = await JoblyApi.getUser(payload.username);
      this.setState({ currentUser });
    }
    this.setState({ isLoading: false });
  }

  async clearUser() {
    localStorage.removeItem('token');
    this.setState({ currentUser: null });
  }

  render() {
    return (
      <div className="App">
        {!this.state.isLoading ? (
          <div>
            <NavBar currentUser={this.state.currentUser} />
            <Routes
              currentUser={this.state.currentUser}
              fetchUser={this.fetchUser}
              clearUser={this.clearUser}
            />
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default App;
