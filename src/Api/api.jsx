import axios from "axios";

const BASE_URL = "http://books.ogaw.uz";

export const api = {
  userRegister: (value) => axios.post(BASE_URL + "/user/register", value),
};
