import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Goals from "./Goals";
import PainPoints from "./PainPoints";
import Objections from "./Section/components/Objections";

export default class InfoTabDash extends React.PureComponent {
  render() {
    const { goalsAndPainPoints, objectionsInfo } = this.props;
    return (
      <Container style={{ marginTop: "2rem" }}>
        <Row>
          <Goals goals={goalsAndPainPoints.goals} />
          <PainPoints painPoints={goalsAndPainPoints.painPoints} />
          <Objections objections={objectionsInfo.objections} />
        </Row>
      </Container>
    );
  }
}
