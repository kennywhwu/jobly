// Search form component

import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

// Filters list based on entered search term
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handle change to user input boxes
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  // Handle submission of form
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleSearch(this.state.name);
  }

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            placeholder="Enter search term..."
          />
          <Button color="info">Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default Search;
