// JobCard component for individual jobs

import React, { Component } from 'react';

class JobCard extends Component {
  render() {
    return (
      <div
        className="JobCard card"
        style={{
          width: '50%',
          margin: '10px auto 10px auto',
          padding: '5px'
        }}
      >
        <div className="card-body">
          <h5 className="company-name card-title">{this.props.job.title}</h5>
          <p className="company-description card-text">
            Salary: {this.props.job.salary}
          </p>
          <p className="company-description card-text">
            Equity: {this.props.job.equity}
          </p>
          <button>Apply</button>
        </div>
      </div>
    );
  }
}

export default JobCard;
