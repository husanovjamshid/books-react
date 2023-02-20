import { BOOK_ID } from "./bookType";

export const initialState = {
  bookSingleId: +"",
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ID:
      return { ...state, bookSingleId: action.payload };
    default:
      return state;
  }
};
