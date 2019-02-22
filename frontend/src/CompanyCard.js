// CompanyCard for specific company information

import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

class CompanyCard extends Component {
  render() {
    return (
      <Card className="CompanyCard">
        <Link
          key={this.props.company.handle}
          to={`/companies/${this.props.company.handle}`}
        >
          <CardBody className="CardBody">
            <CardTitle className="company-name CardTitle">
              {this.props.company.name}
            </CardTitle>
            <CardText className="company-description card-text">
              {this.props.company.description}
            </CardText>
          </CardBody>
          <CardImg
            src={`/SVG/${this.props.company.logo_url}`}
            alt={this.props.company.handle}
            style={{ width: "100px", margin: "auto" }}
          />
        </Link>
      </Card>
    );
  }
}

export default CompanyCard;
