import { Route, Routes } from "react-router-dom";
import { BooksPage } from "../../components/Books/Books";
import { AuthCategorys } from "../../components/AuthorCategory/Category";
import { AddAuthors } from "../AddAuthor/AddAuthorPage";
import { AddBook } from "../AddBook/AddBook";
import { InfoAuth } from "../../components/InfoAuthor/InfoAuthor";
import { ProfilHome } from "../Profil/ProfilHome/ProfilHome";

export const PrivatePage = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<AuthCategorys />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/AddAuthor" element={<AddAuthors />} />
        <Route path="/AddBook" element={<AddBook />} />
        <Route path="/infoAuthor" element={<InfoAuth />} />
        <Route path="/profile/*" element={<ProfilHome />} />
      </Routes>
    </>
  );
};
