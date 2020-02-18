import axios from "axios";

export function getDocumentsByUser() {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/documents`);
}

export function getProjectsByUser() {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/projects`);
}

export function getWorkersByUser() {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/workers`);
}
