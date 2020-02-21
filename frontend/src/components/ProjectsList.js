import React from "react";
//import "../css/ProjectsList.css";

export function ProjectsList({ projects, selectedIndex, onProjectSelected }) {
  return (
    <React.Fragment>
      <h1>Actuaciones</h1>
      <div className="li-actuaciones">
        <ul className="">
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
