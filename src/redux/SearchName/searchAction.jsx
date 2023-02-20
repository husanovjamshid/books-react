import { SEARCH_NAME } from "./searchType";

export const setSearch = (searchName) => {
  return { type: SEARCH_NAME, payload: searchName };
};
