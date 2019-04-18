import Settings from "./Settings";
import { connect } from "react-redux";

function mapStateToProps(state, ownProps) {
  const stages = state.settings.get("stages").toArray();
  const stageId = ownProps.match.params.stageId;
  const currentStage = stages.find(stage => stage.get("stageId") === stageId);
  return {
    stage: currentStage
  };
}

export default connect(mapStateToProps)(Settings);
