import axios from "axios";

export function getExpiredDocuments() {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api/workers/expireddocuments`
  );
}

export function getExpiringDocuments() {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api/workers/expiringdocuments`
  );
}

export function getNotObsoletDocuments() {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api/documents/notobsolete`
  );
}
