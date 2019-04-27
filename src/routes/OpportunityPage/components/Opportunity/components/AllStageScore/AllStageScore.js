import React from "react";

import { Progress, Badge } from "reactstrap";
import Container from "react-bootstrap/Container";

export default class AllStageScore extends React.PureComponent {
  progressBarColor(allCurrentStageScore) {
    if (allCurrentStageScore <= 50) {
      return "danger";
    } else if (allCurrentStageScore <= 100) {
      return "warning";
    } else if (allCurrentStageScore <= 200) {
      return "info";
    } else if (allCurrentStageScore <= 300) {
      return "primary";
    } else {
      return "success";
    }
  }

  render() {
    const { allStageTotalScore, allCurrentStageScore } = this.props;

    return (
      <Container>
        <h3 className="text-center">
          <Badge color="info">Total Opportunity Score</Badge>
        </h3>
        <Progress multi>
          <Progress
            bar
            color={this.progressBarColor(allCurrentStageScore)}
            value={allCurrentStageScore}
            max={allStageTotalScore}>
            {allCurrentStageScore} of {allStageTotalScore}
          </Progress>
        </Progress>
      </Container>
    );
  }
}
