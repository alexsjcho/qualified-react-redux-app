import React from "react";

import { Progress } from "reactstrap";
import Container from "react-bootstrap/Container";

export default class AllStageScore extends React.Component {
  render() {
    const { allStageTotalScore } = this.props;
    return (
      <Container>
        <div className="text-center">
          Total Opportunity Score (40) of {allStageTotalScore}
        </div>
        <Progress multi>
          <Progress bar color="danger" value="5" max={allStageTotalScore}>
            5
          </Progress>
          <Progress bar color="warning" value="15" max={allStageTotalScore}>
            15
          </Progress>
          <Progress bar color="info" value="10" max={allStageTotalScore}>
            10
          </Progress>
          <Progress bar color="primary" value="10" max={allStageTotalScore}>
            10
          </Progress>
          <Progress bar color="success" value="10" max={allStageTotalScore}>
            10
          </Progress>
        </Progress>
      </Container>
    );
  }
}
