import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import JoblyApi from './JoblyApi';
import CompanyCard from './CompanyCard';
import Search from './Search';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = { companies: [] };
    this.filterCompanies = this.filterCompanies.bind(this);
  }

  async componentDidMount() {
    // [{handle:, name:...},{},...]
    let results = await JoblyApi.getCompanies();
    this.setState({ companies: results });
  }

  async filterCompanies(name) {
    let results = await JoblyApi.getCompaniesSearch(name);
    this.setState({ companies: results });
  }

  render() {
    return (
      <div className="Companies">
        Companies
        <Search handleSearch={this.filterCompanies} />
        {this.state.companies.map(company => (
          <Link key={company.handle} to={`/companies/${company.handle}`}>
            <CompanyCard key={company.handle} company={company} />
          </Link>
        ))}
      </div>
    );
  }
}

export default Companies;
