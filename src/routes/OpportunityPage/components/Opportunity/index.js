import Opportunity from "./Opportunity";
import { connect } from "react-redux";
import {
  getCurrentStageSettings,
  getOpportunityStage
} from "../../../../shared/selectors";
import withImmutablePropsToJS from "with-immutable-props-to-js";

const mapStateToProps = (state, ownProps) => {
  return {
    stageSettings: getCurrentStageSettings(state, ownProps)
    // stage: getOpportunityStage(state, ownProps)
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withImmutablePropsToJS(Opportunity));
