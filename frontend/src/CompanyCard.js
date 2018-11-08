// CompanyCard for specific company information

import React, { Component } from 'react';
import './CompanyCard.css';
import { Link } from 'react-router-dom';

class CompanyCard extends Component {
  render() {
    return (
      <div
        className="CompanyCard card"
        style={{
          width: '50%',
          margin: '10px auto 10px auto',
          padding: '10px'
        }}
      >
        <Link
          key={this.props.company.handle}
          to={`/companies/${this.props.company.handle}`}
        >
          <div className="card-body">
            <h5 className="company-name card-title">
              {this.props.company.name}
            </h5>
            <p className="company-description card-text">
              {this.props.company.description}
            </p>
          </div>
          <img
            // className="card-img-top"
            src="https://loremflickr.com/75/75/cat"
            alt={this.props.company.handle}
            style={{ width: '100px', margin: 'auto' }}
            // width="100px"
          />
        </Link>
      </div>
    );
  }
}

export default CompanyCard;
