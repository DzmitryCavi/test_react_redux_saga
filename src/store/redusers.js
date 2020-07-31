import { combineReducers } from "redux";
import { listReduser } from "./listReduser";
import { characterReduser } from "./characterReduser";

export const Redusers = combineReducers({
  list: listReduser,
  character: characterReduser,
});
