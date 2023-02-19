import { Containers } from "../../../components/Home/Header/header.style";
import {
  FormLabel,
  FormName,
  FormPhone,
  ProfilCamera,
  ProfilContent,
  ProfilForm,
  ProfilImg,
  ProfilInput,
  ProfilTitle,
  ProfilWrap,
  UploadWrap,
} from "./profil.style";
import avatar from "../../../assets/img/avloniy.png";
import camera from "../../../assets/img/Camera.svg";
import { FormButton } from "../Security/security.style";
export const Profil = () => {
  return (
    <Containers>
      <ProfilContent>
        {" "}
        <ProfilWrap>
          <ProfilImg src={avatar} alt="" />
          <UploadWrap>
            <ProfilInput type="file" accept="image/*" />
            <ProfilCamera src={camera} alt="" />
          </UploadWrap>
        </ProfilWrap>
        <ProfilForm>
          <ProfilTitle>My profile</ProfilTitle>
          <form action="">
            <FormLabel htmlFor="fname">First name</FormLabel>
            <FormName type="text" id="fname" placeholder="First name" />
            <FormLabel htmlFor="lname">Last name</FormLabel>
            <FormName type="text" id="lname" placeholder="Last name" />
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <FormPhone type="number" id="phone" placeholder="Phone" />
            <FormButton>Save Changes</FormButton>
          </form>
        </ProfilForm>
      </ProfilContent>
    </Containers>
  );
};
