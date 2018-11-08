import React, { Component } from 'react';
import jwt from 'jsonwebtoken';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';
import Alert from './Alert';
import JoblyApi from './JoblyApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isLoading: true,
      alert: { type: null, message: '' }
    };
    this.fetchUser = this.fetchUser.bind(this);
    this.clearUser = this.clearUser.bind(this);
    this.triggerAlert = this.triggerAlert.bind(this);
  }

  async componentDidMount() {
    this.fetchUser();
  }

  // componentDidUpdate() {
  //   if (this.state.alert.type !== null) {
  //     this.setState({ alert: { type: null } });
  //   }
  // }

  async fetchUser() {
    try {
      let token = JSON.parse(localStorage.getItem('token'));
      if (token !== null) {
        let payload = jwt.decode(token);
        let currentUser = await JoblyApi.getUser(payload.username);
        this.setState({ currentUser });
      }
    } catch (err) {}
    this.setState({ isLoading: false });
  }

  clearUser() {
    this.setState({ currentUser: null }, () =>
      localStorage.removeItem('token')
    );
  }

  triggerAlert(type, message) {
    this.setState({ alert: { type, message } });
  }

  render() {
    const alert = this.state.alert;
    return (
      <div className="App">
        {!this.state.isLoading ? (
          <div>
            <NavBar currentUser={this.state.currentUser} />
            {alert.type !== null ? (
              <Alert type={alert.type} message={alert.message} />
            ) : (
              undefined
            )}
            <Routes
              currentUser={this.state.currentUser}
              fetchUser={this.fetchUser}
              clearUser={this.clearUser}
              triggerAlert={this.triggerAlert}
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
