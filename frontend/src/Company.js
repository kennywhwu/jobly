// Company component for inidividual company and respective jobs

import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = { company: { jobs: [] } };
  }

  // Retrieve company information when component mounts
  async componentDidMount() {
    let result = await JoblyApi.getCompany(this.props.match.params.handle);
    this.setState({ company: result });
  }

  render() {
    return (
      <div className="Company">
        <div className="header">
          <h3>{this.state.company.name}</h3>
          <p>{this.state.company.description}</p>
        </div>

        {this.state.company.jobs.map(job => (
          <JobCard
            key={job.id}
            job={job}
            currentUser={this.props.currentUser}
            triggerAlert={this.props.triggerAlert}
            fetchUser={this.props.fetchUser}
          />
        ))}
      </div>
    );
  }
}

export default Company;
