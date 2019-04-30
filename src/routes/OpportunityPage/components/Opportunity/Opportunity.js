import React from 'react'
import Dashboard from './components/Dashboard'
import StageTabs from './components/StageTabs'
import Navbar from 'react-bootstrap/Navbar'

class Opportunity extends React.PureComponent {
  render () {
    const {
      stageSettings,
      stageId,
      stage,
      saveOpportunityStage,
      isSavingStage,
      goalsAndPainPoints,
      objectionsInfo,
      maxPossibleStageScore,
      allStageTotalScore,
      allCurrentStageScore,
      toggleOpportunityObjectionResolved,
      resolvedObjections,
      resolvedObjectionsScore
    } = this.props
    return (
      <div>
        <Navbar />
        <Dashboard
          stage={stage}
          allStageTotalScore={allStageTotalScore - resolvedObjectionsScore}
          allCurrentStageScore={allCurrentStageScore - resolvedObjectionsScore}
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
          toggleOpportunityObjectionResolved={toggleOpportunityObjectionResolved}
          resolvedObjections={resolvedObjections}
          resolvedObjectionsScore={resolvedObjectionsScore}
        />
      </div>
    )
  }
}

export default Opportunity
