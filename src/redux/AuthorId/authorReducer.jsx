import { AUTH_ID } from "./authorType";

export const initialState = {
  arr: +'',
};

export const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ID:
      return { ...state, arr: action.payload };
    default:
      return state;
  }
};
