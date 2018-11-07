import React, { Component } from 'react';

class JobCard extends Component {
  render() {
    return (
      <div className="JobCard">
        <div>{this.props.job.title}</div>
        <div>Salary: {this.props.job.salary}</div>
        <div>Equity: {this.props.job.equity}</div>
        <button>Apply</button>
        <hr />
      </div>
    );
  }
}

export default JobCard;
