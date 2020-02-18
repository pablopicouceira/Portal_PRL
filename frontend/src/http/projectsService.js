import axios from "axios";

export function getProjects() {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/projects`);
}

export function getNonAssociatedWorkers(projectId) {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api/projects/${projectId}/non-associated`
  );
}

export function getInactiveProjects() {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api/projects/inactive`
  );
}

export function createProject(project) {
  return axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/api/projects`,
    project
  );
}

export function updateProject(id, project) {
  return axios.put(
    `${process.env.REACT_APP_BACKEND_URL}/api/workers/${id}`,
    project
  );
}

export function deactivateProject(id) {
  return axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/workers/${id}`);
}

export function getWorkersFromProject(id) {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api/projects/${id}/workers`
  );
}

export function getNotAssociatedWorkersToProject(id) {
  return axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api/projects/${id}/not-associated`
  );
}

export function associateWorkerToProject(projectId, workerId) {
  return axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/api/projects/${projectId}/${workerId}`
  );
}

export function uploadImageProject(projectId, data) {
  return axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/api/projects/${projectId}`,
    data
  );
}
