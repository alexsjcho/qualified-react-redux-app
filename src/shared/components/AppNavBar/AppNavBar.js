import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Badge } from "reactstrap";

export default class AppNavBar extends React.Component {
  render() {
    return (
      <Container style={{ marginBottom: "33px" }}>
        <Navbar
          bg="dark"
          variant="dark"
          fixed="top"
          collapseOnSelect
          expand="lg">
          <Navbar.Brand>
            <Badge color="light">
              <Link to="/"> Qualified </Link>
            </Badge>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Badge color="dark">
                <Link to="/accounts"> Accounts </Link>
              </Badge>

              <Badge color="dark">
                <Link to="/settingspage"> Setting </Link>
              </Badge>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
