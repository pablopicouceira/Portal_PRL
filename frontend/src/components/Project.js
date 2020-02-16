import React from "react";

export function Project({
  project = {},
  onDeactivateProject,
  onUpdateProject,
  activeProject,
  inactiveProject = {}
}) {
  return (
    <React.Fragment>
      <button onClick={() => onDeactivateProject(project.id)}>
        Desactivar Actuación
      </button>
    </React.Fragment>
  );
}
