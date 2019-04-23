import OpportunityPage from "./routes/Demo/Demo";
import { connect } from "react-redux";
import { loadOpportunityData } from "../../store/action/opportunity";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  loadOpportunityData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpportunityPage);
