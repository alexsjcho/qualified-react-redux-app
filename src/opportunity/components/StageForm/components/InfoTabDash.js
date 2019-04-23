import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Goals from "./Goals";
import PainPoints from "./PainPoints";

export default class InfoTabDash extends React.Component {
  render() {
    return (
      <Container style={{ marginTop: "2rem" }}>
        <Row>
          <Col>
            <Goals />
          </Col>

          <Col>
            <PainPoints />
          </Col>
        </Row>
      </Container>
    );
  }
}
