import { combineReducers } from "redux";
import { authorReducer } from "./AuthorId/authorReducer";
import { tokenReducer } from "./Token/tokenReducer";

export const rootTokenReducer = combineReducers({
  token: tokenReducer,
  userId: authorReducer,
});
