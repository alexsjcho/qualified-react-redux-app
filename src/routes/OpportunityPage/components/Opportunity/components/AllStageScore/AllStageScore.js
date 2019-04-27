import React from "react";

import { Progress, Badge } from "reactstrap";
import Container from "react-bootstrap/Container";

export default class AllStageScore extends React.PureComponent {
  render() {
    const { allStageTotalScore, allCurrentStageScore } = this.props;

    // progressBarCurrentColor = () => {
    //   const dangerColor = { allCurrentStageScore } === 42;
    // };

    return (
      <Container>
        <h3 className="text-center">
          <Badge color="info">Total Opportunity Score</Badge>
        </h3>
        <Progress multi>
          <Progress
            bar
            color="danger"
            value={allCurrentStageScore}
            max={allStageTotalScore}>
            {allCurrentStageScore} of {allStageTotalScore}
          </Progress>
          {/* <Progress bar color="warning" value="15" max={allStageTotalScore}>
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
          </Progress> */}
        </Progress>
      </Container>
    );
  }
}
