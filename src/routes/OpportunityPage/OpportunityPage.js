import React from 'react'
import Opportunity from './components/Opportunity'
import AppNavBar from '../../shared/components/AppNavBar'

export default class OpportunityPage extends React.PureComponent {
  componentDidMount () {
    // call the action that loads opportunity
    this.props.loadOpportunityData(this.props.match.params.opportunityId)
    // TODO: when page loads, scroll to the top automatically
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
        {this.props.stageId && (
          <Opportunity opportunityId={this.props.opportunity.opportunityId} stageId={this.props.stageId} history={this.props.history} />
        )}
      </div>
    )
  }
}
