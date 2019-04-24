import Settings from "./Settings";
import { connect } from "react-redux";
import {
  getCurrentStageSettings,
  getSettings,
  getMaxPossibleStageScore
} from "../../shared/selectors";
import { submitStage, updateStageScore } from "../../store/action/settings";
import withImmutablePropsToJS from "with-immutable-props-to-js";

const mapDispatchToProps = {
  submitStage,
  updateStageScore
};

function mapStateToProps(state, ownProps) {
  return {
    stage: getCurrentStageSettings(state, ownProps),
    settings: getSettings(state),
    totalScore: getMaxPossibleStageScore(state, ownProps)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withImmutablePropsToJS(Settings));
