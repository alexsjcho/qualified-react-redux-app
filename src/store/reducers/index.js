import opportunity from "./opportunity";
import allOppDash from "./allOppDash";
import settings from "./settings";
import { combineReducers } from "redux";

export default combineReducers({
  opportunity,
  allOppDash,
  settings
});
