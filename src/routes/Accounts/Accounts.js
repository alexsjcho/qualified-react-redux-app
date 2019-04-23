import React from "react";

import Container from "react-bootstrap/Container";
import AllOppDash from "./components/AllOppDash";
import CreateOppModalForm from "./components/CreateOppModalForm";
import AppNavBar from "../../shared/components/AppNavBar";

export default class Accounts extends React.PureComponent {
  render() {
    return (
      <Container>
        <Container>
          <AppNavBar />
        </Container>
        <Container>
          <AllOppDash />
          <CreateOppModalForm />
        </Container>
      </Container>
    );
  }
}
