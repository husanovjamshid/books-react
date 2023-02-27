import axios from "axios";

const BASE_URL = "http://localhost:2020";

export const api = {
  userRegister: (value) =>  axios.post(BASE_URL + "/user/register", value),
};
