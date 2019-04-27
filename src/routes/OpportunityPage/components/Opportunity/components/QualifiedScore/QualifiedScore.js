import React from "react";
import { Progress, Badge } from "reactstrap";

export default class QualifiedScore extends React.PureComponent {
  render() {
    const { stageSettings, maxPossibleStageScore, stage = {} } = this.props;

    return (
      <div>
        <h3 className="text-center">
          <Badge color="primary">{stageSettings.stageLabel} Stage Score</Badge>
        </h3>
        <Progress
          color="info"
          value={stage.score || 0}
          max={maxPossibleStageScore}>
          {stage.score || 0} of {maxPossibleStageScore}
        </Progress>
      </div>
    );
  }
}
