import React from "react";

import Container from "react-bootstrap/Container";
import AllOppDash from "./components/AllOppDash";
import CreateOppModalForm from "./components/CreateOppModalForm";
import AppNavBar from "../../shared/components/AppNavBar";

export default class Accounts extends React.PureComponent {
  componentDidUpdate(prevProps) {
    if (
      this.props.createdOpportunityId &&
      prevProps.createdOpportunityId !== this.props.createdOpportunityId
    ) {
      this.props.history.push(
        `/opportunity/${this.props.createdOpportunityId}`
      );
    }
  }

  componentDidMount() {
    this.props.loadAllOpportunities();
  }

  render() {
    return (
      <Container>
        <AppNavBar />
        <AllOppDash
          allStageTotalScore={this.props.allStageTotalScore}
          opportunitiesList={this.props.opportunitiesList || []}
        />
        <CreateOppModalForm createOpportunity={this.props.createOpportunity} />
      </Container>
    );
  }
}
