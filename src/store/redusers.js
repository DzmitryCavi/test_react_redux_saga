import { combineReducers } from "redux";
import { postReduser } from "./postReduser";

export const Redusers = combineReducers({
  posts: postReduser,
});
