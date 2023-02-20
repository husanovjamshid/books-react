import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useParams } from "react-router-dom";
import { setToken } from "../../../redux/Token/tokenAction";
import { Profil } from "../Profil/Profil";
import { ProfileHeader } from "../ProfilHeader/ProfilHeader";
import { Security } from "../Security/Security";
import { Setting } from "../Setting/Setting";

export const ProfilHome = () => {
  

  return (
    <>
      <ProfileHeader />
      <Routes>
        <Route index element={<Profil />} />
        <Route path="/security" element={<Security />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </>
  );
};
