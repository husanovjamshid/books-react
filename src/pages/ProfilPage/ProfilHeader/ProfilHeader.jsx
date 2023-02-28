import { NavLink } from "react-router-dom";
import { ProfilDesc, ProfilNumber } from "./ProHeaderStyle";

export const ProfileHeader = () => {
  return (
    <>
      <div className="row m-0">
        <div
          style={{ background: "#F3F6F9", cursor: "pointer",padding: '8px 15px' }}
          className="col-md-4"
        >
          <NavLink to="">
            <div className="d-flex gap-3 align-items-center">
              <ProfilNumber>1</ProfilNumber>
              <ProfilDesc>Profile</ProfilDesc>
            </div>
          </NavLink>
        </div>
        <div
          style={{ background: "#F3F6F9", cursor: "pointer",padding: '8px 15px' }}
          className="col-md-4"
        >
          <NavLink to="security">
            <div className="d-flex gap-3 align-items-center ">
              <ProfilNumber>2</ProfilNumber>
              <ProfilDesc>Security</ProfilDesc>
            </div>
          </NavLink>
        </div>
        <div
          style={{ background: "#F3F6F9", cursor: "pointer",padding: '8px 15px' }}
          className="col-md-4"
        >
          <NavLink to="setting">
            <div className="d-flex gap-3 align-items-center ">
              <ProfilNumber>4</ProfilNumber>
              <ProfilDesc>Settings</ProfilDesc>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};
