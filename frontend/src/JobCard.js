// JobCard component for individual jobs

import React, { Component } from 'react';
import JoblyApi from './JoblyApi';

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applied: this.props.currentUser.jobsAppliedTo.has(this.props.job.id)
        ? true
        : false
    };
    this.apply = this.apply.bind(this);
  }

  async componentDidMount() {
    // let appliedJob = await JoblyApi.getJob(this.props.job.id);
  }

  async apply() {
    let message = await JoblyApi.apply(this.props.job.id, this.props.job.state);
    if (message) {
      this.setState({ applied: message, disabled: true });
      this.props.triggerAlert('success', 'Applied to job!');
      this.props.fetchUser();
    }
  }

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
          <button
            className="btn btn-primary"
            onClick={this.apply}
            disabled={this.state.applied ? true : false}
          >
            {this.state.applied ? 'Applied' : 'Apply'}
          </button>
        </div>
      </div>
    );
  }
}

export default JobCard;
