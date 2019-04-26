import React from "react";

import Container from "react-bootstrap/Container";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import AppNavBar from "../../../../shared/components/AppNavBar";

export default class SettingsPage extends React.PureComponent {
  render() {
    return (
      <Container>
        <AppNavBar />
        <ListGroup>
          <h2 style={{ marginTop: "2rem" }} className="text-center">
            Settings Page{" "}
          </h2>
          <ListGroupItem>
            <Link to="/settings/qualification"> Qualification </Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link to="/settings/discovery"> Discovery </Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link to="/settings/demo"> Demo </Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link to="/settings/obstacles"> Obstacles </Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link to="/settings/negotiation"> Negotiation </Link>
          </ListGroupItem>
        </ListGroup>
      </Container>
    );
  }
}
