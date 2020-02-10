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

axios.interceptors.response.use(
  function(response) {
    console.log("RESPONSE INTERCEPTOR:", response);
    if (response.data.accessToken) {
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      token = response.data.accessToken;
    }
    return response;
  },
  function(error) {
    // En caso de que el token expire (401)
    // y no sea el endpoint de login (que tambien devuelve 401 cuando las credenciales son invalidas)
    // Entonces redirijo a la URL de login y limpio el localStorage
    if (error.response.status === 401 && !error.config.url.includes("/auth")) {
      localStorage.removeItem("currentUser");
      window.location.href = "/";
    }
    // Siempre devolver el error de esta forma, a través de Promise.reject
    return Promise.reject(error);
  }
);

export function login(formData) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth`, formData);
}
