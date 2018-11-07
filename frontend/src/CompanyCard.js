// CompanyCard for specific company information

import React, { Component } from 'react';

class CompanyCard extends Component {
  render() {
    return (
      <div className="CompanyCard">
        <div>{this.props.company.name}</div>
        <div>{this.props.company.description}</div>
        <img
          src="https://loremflickr.com/75/75/cat"
          alt={this.props.company.handle}
        />
        <hr />
      </div>
    );
  }
}

export default CompanyCard;
