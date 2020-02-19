import axios from "axios";

export function getWorkers(accessToken) {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/workers`);
}

export function getInactiveWorkers(accessToken) {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api/workers/inactive`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
}

export function createWorker(accessToken, worker) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/workers`, worker);
}

export function deactivateWorker(id) {
  return axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/workers/${id}`);
}

export function reactivateWorker(id) {
  return axios.put(
    `${process.env.REACT_APP_BACKEND_URL}/api/workers/recover/${id}`
  );
}

export function updateWorker(id, worker) {
  return axios.put(
    `${process.env.REACT_APP_BACKEND_URL}/api/workers/${id}`,
    worker
  );
}

export function getProjectsFromWorker(id) {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api/workers/${id}/projects`
  );
}

export function uploadDocument(workerId, requirementId, formData) {
  return axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/api/workers/${workerId}/${requirementId}/document`,
    formData
  );
}

export function getDocumentsWorker(workerId) {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api/workers/${workerId}/documents`
  );
}
