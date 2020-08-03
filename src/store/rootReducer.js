import { combineReducers } from "redux";
import { listReducer } from "./reducers/listReducer";
import { characterReducer } from "./reducers/characterReducer";

export const Reducers = combineReducers({
  list: listReducer,
  character: characterReducer,
});
