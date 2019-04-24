import React from 'react'
import Dashboard from '../Dashboard/index'
import StageTabs from '../StageTabs'
import Navbar from 'react-bootstrap/Navbar'

class Opportunity extends React.PureComponent {
  render () {
    const { stageSettings, stageId, stage } = this.props
    return (
      <div>
        <Navbar />
        <Dashboard />
        <StageTabs stage={stage} stageId={stageId} stageSettings={stageSettings} />
      </div>
    )
  }
}

export default Opportunity
