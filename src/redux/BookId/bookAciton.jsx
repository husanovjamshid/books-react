import { BOOK_ID } from "./bookType";

export const BookId = (bookSingleId) => {
  return { type: BOOK_ID, payload: bookSingleId };
};
