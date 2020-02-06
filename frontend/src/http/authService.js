import axios from "axios";

// const storedUser = JSON.parse(localStorage.getItem("currentUser"));
// const token = (storedUser && storedUser.accessToken) || null;
axios.interceptors.request.use(function(config) {
  console.log("REQUEST INTERCEPTOR:", config);
  if (config.url.indexOf("/auth") === -1) {
    config.headers["Authorization"] = `Bearer ${
      JSON.parse(localStorage.getItem("currentUser")).accessToken
    }`;
  }
  return config;
});

axios.interceptors.response.use(function(response) {
  console.log("RESPONSE INTERCEPTOR:", response);
  if (response.data.accessToken) {
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    console.log(JSON.parse(localStorage.getItem("currentUser")));
  }
  return response;
});

export function login(formData) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth`, formData);
}
