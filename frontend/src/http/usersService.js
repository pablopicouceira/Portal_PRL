import axios from "axios";

export function getDocumentsByUser(params) {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/documents`, {
    params
  });
}

export function getProjectsByUser(params) {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/projects`, {
    params
  });
}

export function getWorkersByUser(params) {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/workers`, {
    params
  });
}
