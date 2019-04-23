import { fromJS } from "immutable";
import reducer from "./reducer";

const initialState = fromJS({
  createdOpportunityId: undefined
  // if we initialize here from DB, it would be done when the app loads
});

export default function(state = initialState, action) {
  return reducer[action.type]
    ? reducer[action.type](state, action.payload)
    : state;
}
