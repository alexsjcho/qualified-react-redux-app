import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AllStageScore from "../AllStageScore/AllStageScore";
import DisplayNews from "../DisplayNews/DisplayNews";

export default class Dashboard extends React.Component {
  render() {
    return (
      <Container style={{ marginBottom: "2rem" }}>
        <Row>
          <Col>
            <AllStageScore />
          </Col>
        </Row>
        <Row>
          <Col>
            <DisplayNews />
          </Col>
        </Row>
      </Container>
    );
  }
}
