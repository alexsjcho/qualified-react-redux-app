import Accounts from "./Accounts";
import { connect } from "react-redux";
import { createOpportunity } from "../../store/action/opportunity";

function mapStateToProps(state) {
  return {
    createdOpportunityId: state.get("opportunity").get("createdOpportunityId")
  };
}
const mapDispatchToProps = {
  createOpportunity
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accounts);
