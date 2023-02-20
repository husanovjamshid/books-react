import axios from "axios";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Containers } from "../../../components/Home/Header/header.style";
import { setToken } from "../../../redux/Token/tokenAction";
import { ProfilTitle } from "../Profil/profil.style";
import {
  FormButton,
  FormLabel,
  FormNameSecurity,
  ProfilFormSecurity,
} from "./security.style";

export const Security = () => {
  const [user, setUser] = useState([]);
  const token = useSelector((item) => item.token.token);
  const dispatch = useDispatch();
  dispatch(setToken(localStorage.getItem("token") || ""));
  axios
    .get("http://localhost:5000/user/me", {
      headers: { Authorization: token },
    })
    .then((data) => setUser(data.data));

  const email = useRef();
  const currentPassword = useRef();
  const newPassword = useRef();

  const handleSecurity = (evt) => {
    evt.preventDefault();
    const securityForm = {
      email: email.current.value,
      currentPassword: currentPassword.current.value,
      newPassword: newPassword.current.value,
    };
    axios
      .put("http://localhost:5000/user/secutiry", securityForm, {
        headers: { Authorization: token },
      })
      .then((data) => console.log(data));
  };

  return (
    <Containers>
      <ProfilFormSecurity>
        <ProfilTitle>Change Or Recover Your Password:</ProfilTitle>
        <form onSubmit={handleSecurity} action="">
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormNameSecurity
            ref={email}
            type="email"
            id="email"
            placeholder={user.email}
          />
          <FormLabel htmlFor="password">Current password</FormLabel>
          <FormNameSecurity
            ref={currentPassword}
            type="password"
            id="password"
            placeholder="********"
          />
          <FormLabel htmlFor="newpassword">New Password</FormLabel>
          <FormNameSecurity
            ref={newPassword}
            type="password"
            id="newpassword"
            placeholder="********"
          />

          <FormButton>Save Changes</FormButton>
        </form>
      </ProfilFormSecurity>
    </Containers>
  );
};
