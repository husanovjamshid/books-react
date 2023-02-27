import { Route, Routes } from "react-router-dom";
import { SignIn } from "../../components/Login/LoginIn";
import { SignUp } from "../../components/Register/RegisterIn";

export const Public = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </>
  );
};
