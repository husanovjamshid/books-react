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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Security = () => {
  const [user, setUser] = useState([]);
  const token = useSelector((item) => item.token.token);
  const dispatch = useDispatch();
  dispatch(setToken(localStorage.getItem("token") || ""));
  axios
    .get("https://books.ogaw.uz/user/me", {
      headers: { Authorization: token },
    })
    .then((data) => setUser(data.data));

  const email = useRef();
  const currentPassword = useRef();
  const newPassword = useRef();

  const handleSecurity = (evt) => {
    evt.preventDefault();
    console.log({
      email: email.current.value,
      currentPassword: currentPassword.current.value,
      newPassword: newPassword.current.value,
    });
    axios
      .put(
        "https://books.ogaw.uz/user/security",
        {
          email: email.current.value,
          currentPassword: currentPassword.current.value,
          newPassword: newPassword.current.value,
        },
        {
          headers: { Authorization: token },
        }
      )
      .then((data) => {
        if (data.status === 201) {
          toast.success("Password changed successfully đ");
        }
      })
      .catch((err) => toast.error("Please enter the correct password âšī¸"));
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </Containers>
  );
};
