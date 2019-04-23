import { fromJS } from "immutable";
import { ACTION_TYPES } from "../../action/alloppdash";

let reducer = {};

reducer[ACTION_TYPES.CREATE_OPPORTUNITY] = (state, { opportunityId }) => {
  return state.set("createdOpportunityId", opportunityId);
};

reducer[ACTION_TYPES.LOAD_ALL_OPPORTUNITIES] = (
  state,
  { allOpportunities }
) => {
  return state.set("opportunitiesList", fromJS(allOpportunities));
};

export default reducer;
