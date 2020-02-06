import React, { useState, useEffect } from "react";
import { getProjects } from "../http/projectsService";
import { useAuth } from "../context/auth-context";
import { Header } from "../components/Header";

export function Actuaciones() {
  const { currentUser } = useAuth();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects(currentUser.accessToken).then(response => {
      setProjects(response.data);
    });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className="App">
        <h1>Actuaciones</h1>
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              {project.id} - {project.descripcion}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
