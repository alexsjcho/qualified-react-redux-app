import React from "react";
import { Progress, Badge } from "reactstrap";

export default class QualifiedScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: props.stage || { stageId: props.stageSettings.stageId, score: 0 }
    };
  }

  render() {
    const { stageSettings, maxPossibleStageScore } = this.props;

    let valueLabel = 1;

    return (
      <div>
        <h3 className="text-center">
          <Badge color="primary">{stageSettings.stageLabel} Stage</Badge>
        </h3>
        <Progress
          value={this.state.stage.score || 0}
          max={maxPossibleStageScore}>
          {valueLabel} of {maxPossibleStageScore}
        </Progress>
      </div>
    );
  }
}
