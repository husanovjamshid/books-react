import { AUTH_ID } from "./authorType";

export const AuthId = (authId) => {
  return { type: AUTH_ID, payload: authId };
};
