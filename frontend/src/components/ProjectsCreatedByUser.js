import React, { useEffect, useState, Component } from "react";
import { getProjectsByUser } from "../http/usersService";

export function ProjectsCreatedByUser() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjectsByUser().then(response => setProjects(response.data));
  }, []);
  console.log(projects);
  return <h1>{projects.length} actuaciones creadas</h1>;
}
