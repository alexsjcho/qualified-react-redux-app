import React from "react";
import { Progress } from "reactstrap";

export default class QualifiedScore extends React.Component {
  render() {
    const valueLabel = 1;
    const maxLabel = 5;

    return (
      <div>
        <div className="text-center">
          {valueLabel} of {maxLabel}
        </div>
        <Progress value={valueLabel} max={maxLabel} />
      </div>
    );
  }
}
