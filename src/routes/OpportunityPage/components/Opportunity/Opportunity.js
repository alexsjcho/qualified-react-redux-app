import React from "react";
import Dashboard from "./components/Dashboard";
import StageTabs from "./components/StageTabs";
import Navbar from "react-bootstrap/Navbar";

class Opportunity extends React.PureComponent {
  render() {
    const {
      stageSettings,
      stageId,
      stage,
      saveOpportunityStage,
      isSavingStage,
      goalsAndPainPoints,
      objectionsInfo,
      maxPossibleStageScore
    } = this.props;
    return (
      <div>
        <Navbar />
        <Dashboard
          stage={stage}
          maxPossibleStageScore={maxPossibleStageScore}
        />
        <StageTabs
          stage={stage}
          stageId={stageId}
          stageSettings={stageSettings}
          saveOpportunityStage={saveOpportunityStage}
          isSavingStage={isSavingStage}
          history={this.props.history}
          goalsAndPainPoints={goalsAndPainPoints}
          objectionsInfo={objectionsInfo}
          maxPossibleStageScore={maxPossibleStageScore}
        />
      </div>
    );
  }
}

export default Opportunity;
