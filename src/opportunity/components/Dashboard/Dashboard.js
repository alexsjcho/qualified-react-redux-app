import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AllStageScore from "../AllStageScore/AllStageScore";
import DisplayNews from "../DisplayNews";

export default class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <AllStageScore />
          </Col>

          <Col>
            <DisplayNews />
          </Col>
        </Row>
      </Container>
    );
  }
}
