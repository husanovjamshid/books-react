import { AUTH_ID } from "./authorType";

export const initialState = {
  userId: "",
};

export const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ID:
      return { ...state, userId: action.payload };
    default:
      return state;
  }
};
