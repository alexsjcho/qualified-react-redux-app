import React, { Component } from "react";
import Dashboard from "../Dashboard/index";
import StageTabs from "../StageTabs";
import Navbar from "react-bootstrap/Navbar";

class Opportunity extends Component {
  render() {
    const { opportunity, stageSettings } = this.props;
    return (
      <div>
        <Navbar />
        <Dashboard />
        <StageTabs opportunity={this.props.opportunity} />
      </div>
    );
  }
}

export default Opportunity;
