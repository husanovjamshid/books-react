import { combineReducers } from "redux";
import { authorReducer } from "./AuthorId/authorReducer";
import { bookReducer } from "./BookId/bookReducer";
import { searchReducer } from "./SearchName/searchReducer";
import { tokenReducer } from "./Token/tokenReducer";
import { userReducer } from "./Users/userReducer";

export const rootTokenReducer = combineReducers({
  token: tokenReducer,
  authId: authorReducer,
  user: userReducer,
  bookSingleId: bookReducer,
  searchName: searchReducer,
});
