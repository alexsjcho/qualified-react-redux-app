import React, { Component } from "react";
import Dashboard from "./Dashboard/index";
import StageTabs from "./StageTabs";

class Opportunity extends Component {
  render() {
    return (
      <div>
        <Dashboard />
        <StageTabs />
      </div>
    );
  }
}

export default Opportunity;
