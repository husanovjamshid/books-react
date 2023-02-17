import { Route, Routes } from "react-router-dom";
import { BooksPage } from "../../components/Books/Books";
import { AuthCategorys } from "../../components/AuthorCategory/Category";
import { AddAuthors } from "../AddAuthor/AddAuthorPage";
import { AddBook } from "../AddBook/AddBook";

export const PrivatePage = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<AuthCategorys />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/AddAuthor" element={<AddAuthors />} />
        <Route path="/AddBook" element={<AddBook />} />
      </Routes>
    </>
  );
};
