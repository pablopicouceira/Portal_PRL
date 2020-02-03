import axios from "axios";

export function login(formData) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth`, formData);
}
