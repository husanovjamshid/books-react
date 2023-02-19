import { AUTH_ID } from "./authorType";

export const AuthId = (arr) => {
  return { type: AUTH_ID, payload: arr };
};
