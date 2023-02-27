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
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../redux/Token/tokenAction";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
export const Profil = () => {
  const [user, setUser] = useState([]);
  const token = useSelector((item) => item.token.token);
  const dispatch = useDispatch();
  dispatch(setToken(localStorage.getItem("token") || ""));
  axios
    .get("http://localhost:2020/user/me", {
      headers: { Authorization: token },
    })
    .then((data) => setUser(data.data));

  const first_name = useRef();
  const last_name = useRef();
  const phone = useRef();
  const image = useRef();

  const handleSend = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("first_name", first_name.current.value);
    formData.append("last_name", last_name.current.value);
    formData.append("phone", phone.current.value);
    formData.append("image", image.current.files[0]);

    axios
      .put("http://localhost:2020/user/account", formData, {
        headers: { Authorization: token },
      })
      .then((data) => console.log(data));

  };

  return (
    <Containers>
      <ProfilContent>
        {" "}
        <ProfilWrap>
          <ProfilImg
          className="w-100"
            src={
              user.image ? `http://localhost:2020/${user.image}` : `${avatar}`
            }
            alt=""
          />
          <UploadWrap>
            <ProfilInput ref={image} type="file" accept="image/*" />
            <ProfilCamera src={camera} alt="" />
          </UploadWrap>
        </ProfilWrap>
        <ProfilForm>
          <ProfilTitle>My profile</ProfilTitle>
          <form onSubmit={handleSend}>
            <FormLabel htmlFor="fname">First name</FormLabel>
            <FormName
              ref={first_name}
              // value={user.first_name}
              type="text"
              id="fname"
              placeholder={user.first_name}
            />
            <FormLabel htmlFor="lname">Last name</FormLabel>
            <FormName
              ref={last_name}
              // value={user.last_name}
              type="text"
              id="lname"
              placeholder={user.last_name}
            />
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <FormPhone
              ref={phone}
              // value={user.phone}
              type="number"
              id="phone"
              placeholder={user.phone}
            />
            <FormButton>Save Changes</FormButton>
          </form>
        </ProfilForm>
      </ProfilContent>
    </Containers>
  );
};
