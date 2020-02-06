import axios from "axios";

export function getProjects(accessToken) {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/projects`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
}
