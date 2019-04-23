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

  render() {
    return (
      <Container>
        <AppNavBar />
        <AllOppDash />
        <CreateOppModalForm createOpportunity={this.props.createOpportunity} />
      </Container>
    );
  }
}
