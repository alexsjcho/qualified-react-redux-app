import React from 'react'
import Dashboard from './components/Dashboard'
import StageTabs from './components/StageTabs'
import Navbar from 'react-bootstrap/Navbar'

class Opportunity extends React.PureComponent {
  render () {
    const { stageSettings, stageId, stage, saveOpportunityStage, isSavingStage } = this.props
    return (
      <div>
        <Navbar />
        <Dashboard />
        <StageTabs
          stage={stage}
          stageId={stageId}
          stageSettings={stageSettings}
          saveOpportunityStage={saveOpportunityStage}
          isSavingStage={isSavingStage}
          history={this.props.history}
        />
      </div>
    )
  }
}

export default Opportunity
