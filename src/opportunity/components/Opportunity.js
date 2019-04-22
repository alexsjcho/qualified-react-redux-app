import React, { Component } from "react";
import Dashboard from "./Dashboard/index";
import StageTabs from "./StageTabs";
import Navbar from "react-bootstrap/Navbar";

class Opportunity extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Dashboard />
        <StageTabs />
      </div>
    );
  }
}

export default Opportunity;
