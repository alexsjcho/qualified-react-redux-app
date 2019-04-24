import React from 'react'
import Opportunity from './components/Opportunity'
import AppNavBar from '../../shared/components/AppNavBar'

export default class OpportunityPage extends React.PureComponent {
  componentDidMount () {
    // call the action that loads opportunity

    this.props.loadOpportunityData(this.props.match.params.opportunityId)
  }

  componentDidUpdate (prevProps) {
    const { history, stageId, opportunity } = this.props
    if (opportunity.opportunityId && !stageId) {
      history.replace(
        `/opportunity/${opportunity.opportunityId}/${opportunity.currentStage}`
      )
    }
  }

  render () {
    return (
      <div>
        <AppNavBar />
        <Opportunity
          opportunity={this.props.opportunity}
          stageId={this.props.stageId}
        />
      </div>
    )
  }
}
