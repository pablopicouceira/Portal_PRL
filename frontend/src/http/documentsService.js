import axios from "axios";

export function getNotObsoletDocuments() {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api/documents/notobsolete`
  );
}
