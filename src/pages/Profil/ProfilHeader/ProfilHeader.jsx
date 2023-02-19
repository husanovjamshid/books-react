import { Link, NavLink } from "react-router-dom";
import { ProfilDesc, ProfilNumber } from "./ProHeaderStyle";
// import { NavLink } from "./ProHeaderStyle";

export const ProfileHeader = () => {
  return (
    <>
      <div className="row m-0">
        <div
          style={{ background: "#F3F6F9", cursor: "pointer" }}
          className="col-md-4"
        >
          <Link to="profil">
            <div className="d-flex gap-3 align-items-center ps-4 py-4">
              <ProfilNumber>1</ProfilNumber>
              <ProfilDesc>Profile</ProfilDesc>
            </div>
          </Link>
        </div>
        <div
          style={{ background: "#F3F6F9", cursor: "pointer" }}
          className="col-md-4"
        >
          <Link to="security">
            <div className="d-flex gap-3 align-items-center ps-4 pt-4">
              <ProfilNumber>2</ProfilNumber>
              <ProfilDesc>Security</ProfilDesc>
            </div>
          </Link>
        </div>
        <div
          style={{ background: "#F3F6F9", cursor: "pointer" }}
          className="col-md-4"
        >
          <Link to="setting">
            <div className="d-flex gap-3 align-items-center ps-4 pt-4">
              <ProfilNumber>4</ProfilNumber>
              <ProfilDesc>Settings</ProfilDesc>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
