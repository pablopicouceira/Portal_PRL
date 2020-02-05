import axios from "axios";

export function getWorkers(accessToken) {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/workers`);
}

// {
//   headers: {
//     Authorization: `Bearer ${accessToken}`;
//   }
// }
