import { HeaderPage } from "./Header/HeaderPage";
import { Books } from "../Books/Books";
import SimpleSlider from "../MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import { Category } from "../Category/Category";

export const Hero = () => {
  return (
    <>
      <HeaderPage />
      <SimpleSlider />
      <Routes>
        <Route path="/books" element={<Books />} />
      </Routes>
    </>
  );
};
