import axios from "axios";

export function login({ email, password }) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth`, {
    email,
    password
  });
}
