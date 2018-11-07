// Company component for inidividual company and respective jobs

import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = { company: { jobs: [] } };
  }

  async componentDidMount() {
    let result = await JoblyApi.getCompany(this.props.match.params.handle);
    this.setState({ company: result });
  }

  render() {
    return (
      <div className="Companies">
        <div>{this.state.company.name}</div>
        <div>{this.state.company.description}</div>

        {this.state.company.jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    );
  }
}

export default Company;
