import { AUTH_ID } from "./authorType";

export const initialState = {
  authId: +'',
};

export const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ID:
      return { ...state, authId: action.payload };
    default:
      return state;
  }
};
