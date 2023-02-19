import { combineReducers } from "redux";
import { authorReducer } from "./AuthorId/authorReducer";
import { tokenReducer } from "./Token/tokenReducer";
import { userReducer } from "./Users/userReducer";

export const rootTokenReducer = combineReducers({
  token: tokenReducer,
  arr: authorReducer,
  user: userReducer,
});
