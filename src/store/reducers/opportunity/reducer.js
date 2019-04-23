import { fromJS } from "immutable";
import { ACTION_TYPES } from "../../action/opportunity";

let reducer = {};

reducer[ACTION_TYPES.CREATE_OPPORTUNITY] = (state, payload) => {
  const { companyName, opportunityName, closeDate, moneyValue } = payload;
  return state;
};

export default reducer;
