import { Route, Routes, useParams } from "react-router-dom";
import { Profile } from "../Profil/Profil";
import { ProfileHeader } from "../ProfilHeader/ProfilHeader";
import { Security } from "../Security/Security";
import { Setting } from "../Setting/Setting";

export const ProfilHome = () => {
  // const { page } = useParams();
  return (
    <>
      <ProfileHeader />
      <Routes>
        <Route index path="/profil" element={<Profile />} />
        <Route path="/security" element={<Security />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </>
  );
};
