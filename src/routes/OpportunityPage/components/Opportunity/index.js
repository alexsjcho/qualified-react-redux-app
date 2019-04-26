import Opportunity from "./Opportunity";
import { connect } from "react-redux";
import { saveOpportunityStage } from "../../../../store/action/opportunity";
import {
  getCurrentStageSettings,
  getOpportunityStage,
  getGoalsAndPainPoints,
  getObjectionsInfo
} from "../../../../shared/selectors";
import withImmutablePropsToJS from "with-immutable-props-to-js";

const mapStateToProps = (state, ownProps) => {
  return {
    stageSettings: getCurrentStageSettings(state, ownProps),
    stage: getOpportunityStage(state, ownProps),
    isSavingStage: state.get("opportunity").get("isSavingStage"), // TODO: Replace with selector
    goalsAndPainPoints: getGoalsAndPainPoints(state, ownProps),
    objectionsInfo: getObjectionsInfo(state, ownProps)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveOpportunityStage: stage => {
      dispatch(saveOpportunityStage(ownProps.opportunityId, stage));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withImmutablePropsToJS(Opportunity));
