import { Route, Routes } from "react-router-dom";
import { Books } from "../../components/Books/Books";
// import { HeroPage } from "../../components/Home/Hero/HeroPage";
import { AuthCategory } from "../../components/Home/AuthorCategory/Category";
import { AddBook } from "../AddBook/AddBook";

export const PrivatePage = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<AuthCategory />} />
        <Route path="/books" element={<Books />} />
        <Route path="/AddBook" element={<AddBook/>} />
      </Routes>
    </>
  );
};
