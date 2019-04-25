import Opportunity from './Opportunity'
import { connect } from 'react-redux'
import { saveOpportunityStage } from '../../../../store/action/opportunity'
import {
  getCurrentStageSettings,
  getOpportunityStage
} from '../../../../shared/selectors'
import withImmutablePropsToJS from 'with-immutable-props-to-js'

const mapStateToProps = (state, ownProps) => {
  return {
    stageSettings: getCurrentStageSettings(state, ownProps),
    stage: getOpportunityStage(state, ownProps)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveOpportunityStage: (stage) => {
      dispatch(saveOpportunityStage(ownProps.opportunityId, stage))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withImmutablePropsToJS(Opportunity))
