// Jobs component for list of jobs

import React, { Component } from 'react';
import { Button } from 'reactstrap';
import JoblyApi from './JoblyApi';
import JobCard from './JobCard';
import Search from './Search';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [], page: 0 };
    this.filterJobs = this.filterJobs.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  static defaultProps = {
    itemsPerPage: 20,
  };

  // Retrieve all jobs when component mounts
  async componentDidMount() {
    // [{handle:, name:...},{},...]
    let results = await JoblyApi.getJobs();
    this.setState({ jobs: results });
  }

  // Filter job list based on search terms
  async filterJobs(title) {
    let results = await JoblyApi.getJobsSearch(title);
    this.setState({ jobs: results });
  }

  changePage(evt) {
    this.setState({ page: +evt.target.id });
  }

  render() {
    let jobs = this.state.jobs.slice(
      this.state.page * this.props.itemsPerPage,
      (1 + this.state.page) * this.props.itemsPerPage
    );
    let pages = [
      ...Array(
        Math.ceil(this.state.jobs.length / this.props.itemsPerPage)
      ).keys(),
    ];

    return (
      <div className="Jobs">
        <div className="header">
          <h3>Jobs</h3>

          <Search handleSearch={this.filterJobs} />

          {pages.map(page => (
            <Button
              onClick={this.changePage}
              id={page}
              className="button-page"
              key={page}
              disabled={this.state.page === page && true}
              color="info"
            >
              {page + 1}
            </Button>
          ))}
        </div>
        {jobs.map(job => (
          <JobCard
            key={job.id}
            job={job}
            currentUser={this.props.currentUser}
            triggerAlert={this.props.triggerAlert}
            fetchUser={this.props.fetchUser}
          />
        ))}

        {pages.map(page => (
          <Button
            onClick={this.changePage}
            id={page}
            className="button-page"
            key={page}
            disabled={this.state.page === page && true}
            color="info"
          >
            {page + 1}
          </Button>
        ))}
      </div>
    );
  }
}

export default Jobs;
