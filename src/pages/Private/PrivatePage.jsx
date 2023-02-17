import { Route, Routes } from "react-router-dom";
import { Books } from "../../components/Books/Books";
import { AuthCategorys } from "../../components/Home/AuthorCategory/Category";
import { AddAuthors } from "../AddAuthor/AddAuthorPage";

export const PrivatePage = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<AuthCategorys />} />
        <Route path="/books" element={<Books />} />
        <Route path="/AddAuthor" element={<AddAuthors />} />
      </Routes>
    </>
  );
};
