// Search form component

import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
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
    this.props.handleSearch(this.state.name);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          onChange={this.handleChange}
          placeholder="Enter search term..."
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Search;
