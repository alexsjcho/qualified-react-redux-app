import Opportunity from './Opportunity'
import { connect } from 'react-redux'
import { saveOpportunityStage, toggleOpportunityObjectionResolved } from '../../../../store/action/opportunity'
import {
  getCurrentStageSettings,
  getOpportunityStage,
  getGoalsAndPainPoints,
  getObjectionsInfo,
  getMaxPossibleStageScore,
  getAllStageTotalScore,
  getAllCurrentStageScore
} from '../../../../shared/selectors'
import withImmutablePropsToJS from 'with-immutable-props-to-js'

const mapStateToProps = (state, ownProps) => {
  return {
    stageSettings: getCurrentStageSettings(state, ownProps),
    stage: getOpportunityStage(state, ownProps),
    isSavingStage: state.get('opportunity').get('isSavingStage'), // TODO: Replace with selector
    goalsAndPainPoints: getGoalsAndPainPoints(state, ownProps),
    objectionsInfo: getObjectionsInfo(state, ownProps),
    maxPossibleStageScore: getMaxPossibleStageScore(state, ownProps),
    allStageTotalScore: getAllStageTotalScore(state, ownProps),
    allCurrentStageScore: getAllCurrentStageScore(state, ownProps)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveOpportunityStage: stage => {
      dispatch(saveOpportunityStage(ownProps.opportunityId, stage))
    },
    toggleOpportunityObjectionResolved: (objection) => {
      dispatch(toggleOpportunityObjectionResolved(objection, ownProps.opportunityId))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withImmutablePropsToJS(Opportunity))
