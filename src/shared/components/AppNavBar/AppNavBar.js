import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default class AppNavBar extends React.Component {
  render() {
    return (
      <Container>
        <Navbar
          bg="dark"
          variant="dark"
          fixed="top"
          collapseOnSelect
          expand="lg">
          <Navbar.Brand>Qualified</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/"> Home </Link>
              <Link to="/demo"> Opportunities </Link>
              <Link to="/settings"> Setting </Link>
              <Link to="/accounts"> Accounts </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
