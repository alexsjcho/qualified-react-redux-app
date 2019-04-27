import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Badge } from "reactstrap";

import Goals from "./Goals";
import PainPoints from "./PainPoints";
import Objections from "./Section/components/Objections";

export default class InfoTabDash extends React.PureComponent {
  render() {
    const { goalsAndPainPoints, objectionsInfo, stage = {} } = this.props;

    return (
      <Container style={{ marginTop: "2rem" }}>
        <h2
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
          className="text-center">
          <Badge color="secondary"> Customer's</Badge>
        </h2>
        <Row className="text-center">
          <Col>
            <Goals goals={goalsAndPainPoints.goals} />
          </Col>

          <Col>
            <PainPoints painPoints={goalsAndPainPoints.painPoints} />
          </Col>

          <Col>
            <Objections
              objections={objectionsInfo.objections}
              resolvedObjections={stage.resolvedObjections}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
