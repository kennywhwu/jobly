// Jobs component for list of jobs

import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';
import Search from './Search';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [] };
    this.filterJobs = this.filterJobs.bind(this);
  }

  async componentDidMount() {
    // [{handle:, name:...},{},...]
    let results = await JoblyApi.getJobs();
    this.setState({ jobs: results });
  }

  async filterJobs(title) {
    let results = await JoblyApi.getJobsSearch(title);
    this.setState({ jobs: results });
  }

  render() {
    return (
      <div className="Jobs">
        Jobs
        <Search handleSearch={this.filterJobs} />
        {this.state.jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    );
  }
}

export default Jobs;
