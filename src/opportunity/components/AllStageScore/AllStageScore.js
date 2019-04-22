import React from "react";

import { Progress } from "reactstrap";
import Container from "react-bootstrap/Container";

export default class AllStageScore extends React.Component {
  render() {
    return (
      <Container>
        <div className="text-center">Various (40) of 55</div>
        <Progress multi>
          <Progress bar value="5" max={55}>
            5
          </Progress>
          <Progress bar color="success" value="15" max={55}>
            15
          </Progress>
          <Progress bar color="warning" value="10" max={55}>
            10
          </Progress>
          <Progress bar color="danger" value="10" max={55}>
            10
          </Progress>
        </Progress>
      </Container>
    );
  }
}
