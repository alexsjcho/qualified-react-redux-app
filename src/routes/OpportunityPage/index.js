import OpportunityPage from "./OpportunityPage";
import { connect } from "react-redux";
import { loadOpportunityData } from "../../store/action/opportunity";
import withImmutablePropsToJS from "with-immutable-props-to-js";

const mapStateToProps = (state, ownProps) => {
  return {
    // TODO: move this to a selector called getOpportunityData
    opportunity: state.get("opportunity").get("data"),
    stageId: ownProps.match.params.stageId
  };
};

const mapDispatchToProps = {
  loadOpportunityData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withImmutablePropsToJS(OpportunityPage));
