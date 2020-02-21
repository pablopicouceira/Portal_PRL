import React from "react";
//import "../css/ProjectsList.css";

export function ProjectsList({ projects, selectedIndex, onProjectSelected }) {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Actuaciones</h1>
        <ul className="li">
          {projects.map((project, index) => (
            <li
              key={project.id}
              onClick={() => onProjectSelected(index)}
              className={selectedIndex === index && "ProjectsList-selected"}
            >
              {project.nombre}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
