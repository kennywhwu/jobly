// Companies component for list of companies

import React, { Component } from 'react';
import './Companies.css';
import JoblyApi from './JoblyApi';
import CompanyCard from './CompanyCard';
import Search from './Search';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = { companies: [] };
    this.filterCompanies = this.filterCompanies.bind(this);
  }

  // Get list of companies when component first mounts
  async componentDidMount() {
    // [{handle:, name:...},{},...]
    // try {
    let companyResults = await JoblyApi.getCompanies();
    this.setState({ companies: companyResults });
    // } catch (err) {
    //   this.props.triggerAlert(''
    // }
  }

  // Filter rendered companies list based on search term
  async filterCompanies(name) {
    let results = await JoblyApi.getCompaniesSearch(name);
    this.setState({ companies: results });
  }

  render() {
    return (
      <div className="Companies">
        <h3>Companies</h3>
        <Search handleSearch={this.filterCompanies} />
        {this.state.companies.map(company => (
          <CompanyCard
            key={company.handle}
            company={company}
            triggerAlert={this.props.triggerAlert}
          />
        ))}
      </div>
    );
  }
}

export default Companies;
