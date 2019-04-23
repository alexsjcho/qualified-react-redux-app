import React from "react";

import Container from "react-bootstrap/Container";
import AllOppDash from "./components/AllOppDash";
import Button from "react-bootstrap/Button";
import CreateOppModal from "./components/CreateOppModal";

export default class Accounts extends React.PureComponent {
  render() {
    return (
      <Container>
        <AllOppDash />
        <CreateOppModal />
      </Container>
    );
  }
}
