import React from "react";
import Opportunity from "../../opportunity/components";
import AppNavBar from "../../shared/components/AppNavBar";

export default class OpportunityPage extends React.PureComponent {
  // componentDidMount() {
  //   // call the action that loads opportunity

  //   this.props.loadOpportunityData(this.props.match.params.opportunityId);
  // }

  componentDidUpdate(prevProps) {
    const { history, match, opportunity } = this.props;
    if (!match.params.stageId) {
      history.replace(
        `/opportunity/${opportunity.opportunityId}/${opportunity.currentStage}`
      );
    }
  }

  render() {
    return (
      <div>
        <AppNavBar />
        <Opportunity />
      </div>
    );
  }
}
