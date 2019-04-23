import React from "react";

export default class OpportunityRow extends React.PureComponent {
  goToOpportunity = e => {
    const {
      history,
      opportunity: { opportunityId }
    } = this.props;
    history.push(`/opportunity/${opportunityId}`);
  };

  render() {
    const {
      opportunity: {
        companyName,
        opportunityName,
        closeDate,
        moneyValue,
        currentStage,
        stages = []
      },
      index,
      allStageTotalScore
    } = this.props;
    //stage.score should be an integer (num)
    const stagesScore = stages.reduce((accumulator, stage) => {
      return accumulator + stage.score;
    }, 0);
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{opportunityName}</td>
        <td>{companyName}</td>
        <td>{closeDate}</td>
        <td>{moneyValue}</td>
        <td>{currentStage}</td>
        <td>{`${stagesScore}/${allStageTotalScore}`}</td>
        <td>
          <button type="button" onClick={this.goToOpportunity}>
            Edit
          </button>
          <button type="button">Delete</button>
        </td>
      </tr>
    );
  }
}
