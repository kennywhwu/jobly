// Companies component for list of companies

import React, { Component } from 'react';
import './Companies.css';
import JoblyApi from './JoblyApi';
import CompanyCard from './CompanyCard';
import Search from './Search';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = { companies: [], page: 0 };
    this.filterCompanies = this.filterCompanies.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  static defaultProps = {
    itemsPerPage: 20
  };

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

  changePage(evt) {
    this.setState({ page: +evt.target.id });
  }

  render() {
    let companies = this.state.companies.slice(
      this.state.page * this.props.itemsPerPage,
      (1 + this.state.page) * this.props.itemsPerPage
    );
    let pages = [
      ...Array(
        Math.ceil(this.state.companies.length / this.props.itemsPerPage)
      ).keys()
    ];

    return (
      <div className="Companies">
        <h3>Companies</h3>

        <Search handleSearch={this.filterCompanies} />

        {pages.map(page => (
          <button onClick={this.changePage} id={page} key={page}>
            {page + 1}
          </button>
        ))}

        {companies.map(company => (
          <CompanyCard
            key={company.handle}
            company={company}
            triggerAlert={this.props.triggerAlert}
          />
        ))}

        {pages.map(page => (
          <button onClick={this.changePage} id={page} key={page}>
            {page + 1}
          </button>
        ))}
      </div>
    );
  }
}

export default Companies;
