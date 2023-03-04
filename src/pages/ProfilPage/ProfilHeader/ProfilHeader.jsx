import { NavLink } from "react-router-dom";
import { BoxWraps } from "../../../app.style";
import { ProfilDesc, ProfilNumber } from "./ProHeaderStyle";

export const ProfileHeader = () => {
  return (
    <>
      <BoxWraps className="row m-0">
        <BoxWraps
          style={{ background: "#F3F6F9", cursor: "pointer",padding: '8px 15px' }}
          className="col-4 col-sm-4 col-md-4 col-lg-4"
        >
          <NavLink to="">
            <BoxWraps className="d-flex gap-3 align-items-center">
              <ProfilNumber>1</ProfilNumber>
              <ProfilDesc>Profile</ProfilDesc>
            </BoxWraps>
          </NavLink>
        </BoxWraps>
        <BoxWraps
          style={{ background: "#F3F6F9", cursor: "pointer",padding: '8px 15px' }}
          className="col-4 col-sm-4 col-md-4 col-lg-4"
        >
          <NavLink to="security">
            <BoxWraps className="d-flex gap-3 align-items-center ">
              <ProfilNumber>2</ProfilNumber>
              <ProfilDesc>Security</ProfilDesc>
            </BoxWraps>
          </NavLink>
        </BoxWraps>
        <BoxWraps
          style={{ background: "#F3F6F9", cursor: "pointer",padding: '8px 15px' }}
          className="col-4 col-sm-4 col-md-4 col-lg-4"
        >
          <NavLink to="setting">
            <BoxWraps className="d-flex gap-3 align-items-center ">
              <ProfilNumber>4</ProfilNumber>
              <ProfilDesc>Settings</ProfilDesc>
            </BoxWraps>
          </NavLink>
        </BoxWraps>
      </BoxWraps>
    </>
  );
};
