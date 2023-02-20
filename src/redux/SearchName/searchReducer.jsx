import { SEARCH_NAME } from "./searchType";

export const initialState = {
  searchName: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_NAME:
      return { ...state, searchName: action.payload };
    default:
      return state;
  }
};
