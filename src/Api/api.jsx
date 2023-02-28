import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = "http://localhost:2020";

export const api = {
  userRegister: (value) =>
    axios.post(BASE_URL + "/user/register", value).catch((err) => {
      toast.error("Error ☹️");
    }),
  userLogin: (value) =>
    axios.post(BASE_URL + "/user/login", value).catch((err) => {
      toast.error("Incorrect email or password ☹️");
    }),
  userCategory: () => axios.get(BASE_URL + "/genre"),
  // userGenreId: (value) => axios.get(BASE_URL + `author/genreId/${value}`),
  userImg: (img) => axios.get(BASE_URL + `/${img}`),
};
