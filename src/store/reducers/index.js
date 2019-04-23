import opportunity from "./opportunity";
// import allOppDash from './allOppDash'
import settings from "./settings";
import { combineReducers } from "redux-immutable";

export default combineReducers({
  opportunity,
  // allOppDash,
  settings
});
