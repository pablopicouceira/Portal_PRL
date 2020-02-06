import axios from "axios";

const storedUser = JSON.parse(localStorage.getItem("currentUser"));
let token = (storedUser && storedUser.accessToken) || null;
axios.interceptors.request.use(function(config) {
  console.log("REQUEST INTERCEPTOR:", config);
  if (token && !config.url.includes("/auth")) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(function(response) {
  console.log("RESPONSE INTERCEPTOR:", response);
  if (response.data.accessToken) {
    localStorage.setItem("currentUser", JSON.stringify(response.data));
  }
  return response;
});

export function login(formData) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth`, formData);
}
