import { fromJS } from "immutable";
import { ACTION_TYPES } from "../../action/opportunity";

let reducer = {};

reducer[ACTION_TYPES.SET_OPPORTUNITY] = (state, { opportunity }) => {
  return state.set("data", fromJS(opportunity));
};

export default reducer;
