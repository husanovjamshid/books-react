import { Route, Routes } from "react-router-dom";
import { SignUp } from "../../components/Register/RegisterIn";
import { SignIn } from "../../components/Login/LoginIn";

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
