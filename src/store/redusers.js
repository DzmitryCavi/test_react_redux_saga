import { combineReducers } from "redux";
import { listReduser } from "./listReduser";

export const Redusers = combineReducers({
  list: listReduser,
});
