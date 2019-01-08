// JobCard component for individual jobs

import React, { Component } from 'react';
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import JoblyApi from './JoblyApi';

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applied: this.props.currentUser.jobsAppliedTo.has(this.props.job.id)
        ? true
        : false,
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
      <Card className="JobCard">
        <CardBody className="CardBody">
          <CardTitle className="company-name CardTitle">
            {this.props.job.title}
          </CardTitle>
          <CardText className="company-description CardText">
            Salary: {this.props.job.salary}
          </CardText>
          <CardText className="company-description CardText">
            Equity: {this.props.job.equity}
          </CardText>
          <Button
            color="primary"
            onClick={this.apply}
            disabled={this.state.applied ? true : false}
          >
            {this.state.applied ? 'Applied' : 'Apply'}
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default JobCard;
