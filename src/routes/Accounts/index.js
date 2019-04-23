import Accounts from "./Accounts";
import { connect } from "react-redux";
import {
  createOpportunity,
  loadAllOpportunities
} from "../../store/action/alloppdash";
import {
  getCreatedOpportunityId,
  getOpportunitiesList,
  getAllStageTotalScore
} from "../../shared/selectors";
import withImmutablePropsToJS from "with-immutable-props-to-js";

function mapStateToProps(state) {
  return {
    createdOpportunityId: getCreatedOpportunityId(state),
    opportunitiesList: getOpportunitiesList(state),
    allStageTotalScore: getAllStageTotalScore(state)
  };
}
const mapDispatchToProps = {
  createOpportunity,
  loadAllOpportunities
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withImmutablePropsToJS(Accounts));
