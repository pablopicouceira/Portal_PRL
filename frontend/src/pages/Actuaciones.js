import React, { useState, useEffect, useReducer } from "react";
import {
  getProjects,
  getInactiveProjects,
  createProject,
  deactivateProject,
  updateProject,
  getNonAssociatedWorkers,
  getWorkersFromProject
} from "../http/projectsService";
import { useAuth } from "../context/auth-context";
import { useForm } from "react-hook-form";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProjectsList } from "../components/ProjectsList";
import { InactiveProjectsList } from "../components/InactiveProjectsList";
import { ActuacionesForm } from "../components/ActuacionesForm";
import { Project } from "../components/Project";
import { WorkersList } from "../components/WorkersList";

import "../css/Actuaciones.css";

function projectsReducer(state, action) {
  switch (action.type) {
    case "GET_PROJECTS":
      return { ...state, projects: action.initialProjects };
    case "GET_INACTIVE_PROJECTS":
      return { ...state, inactiveProjects: action.initialProjects };
    case "TOGGLE_SHOWN_PROJECTS":
      return {
        ...state,
        showInactive: !state.showInactive,
        selectedProject: null,
        selectedInactiveProject: null
      };
    case "SELECT_PROJECT":
      return { ...state, selectedProject: action.index };
    case "SET_NON_ASSOCIATED_WORKERS":
      return { ...state, workersNonAssociated: action.data };
    case "SET_ASSOCIATED_WORKERS":
      return { ...state, workersAssociated: action.data };
    case "SELECT_INACTIVE_PROJECT":
      return { ...state, selectedInactiveProject: action.index };
    case "CREATE_PROJECT":
      return { ...state, projects: [action.project, ...state.projects] };

    case "DESELECT_PROJECT":
      return { ...state, selectedWorker: null };
    default:
      return state;
  }
}

export function Actuaciones() {
  const { currentUser } = useAuth();
  const [state, dispatch] = useReducer(projectsReducer, {
    projects: [],
    inactiveProjects: [],
    selectedProject: null,
    showInactive: false,
    selectedInactiveProject: null,
    workersNonAssociated: [],
    workersAssociated: []
  });

  const { register, errors, formState, handleSubmit, setError } = useForm();

  const getData = () => {
    getProjects(currentUser.accessToken).then(response =>
      dispatch({ type: "GET_PROJECTS", initialProjects: response.data })
    );
    getInactiveProjects(currentUser.accessToken).then(response =>
      dispatch({
        type: "GET_INACTIVE_PROJECTS",
        initialProjects: response.data
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const handleRegister = formData => {
    return createProject(formData)
      .then(response => {
        // dispatch({ type: "CREATE_PROJECT", project: response.data });

        getData();
        console.log(response.data);
      })
      .catch(error => {
        if (error.response.status === 409) {
          setError("email", "conflict", "The email you entered already exists");
        }
      });
  };

  const action = formData => {
    if (state.selectedProject != null) {
      const project = state.projects[state.selectedProject];
      updateProject(project.id, formData)
        .then(response => {
          console.log(response);

          getData();
        })
        .catch(error => {
          console.log(error);
        });
      // actualizaTrabajador(formData, id);
    } else {
      handleRegister(formData);
    }
    console.log(
      "hola desde el actions,aqui se controla si se crea o se actualiza un trabajador"
    );
  };

  const handleDeactivateProject = id => {
    deactivateProject(id).then(() => {
      dispatch({ type: "DEACTIVATE_PROJECT", id });
    });
  };

  const handleUpdateProject = id => {
    updateProject(id).then(() => {
      dispatch({ type: "UPDATE_PROJECT", id });
    });
  };

  const getWorkers = projectId => {
    getNonAssociatedWorkers(projectId)
      .then(response => {
        console.log(response.data);

        dispatch({ type: "SET_NON_ASSOCIATED_WORKERS", data: response.data });
      })
      .catch(err => {
        console.log(err);
      });

    getWorkersFromProject(projectId)
      .then(response => {
        dispatch({
          type: "SET_ASSOCIATED_WORKERS",
          data: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getWorker = () => {
    if (state.selectedWorker >= 0) {
      const selected = state.workers[state.selectedWorker];

      if (selected) {
        return selected;
      }
    }

    return null;
  };

  const project = state.projects[state.selectedProject]
    ? state.projects[state.selectedProject]
    : {};

  return (
    <div>
      <Header
        title="Portal Gestión PRL"
        onLogout={e => {
          localStorage.removeItem("currentUser");
          window.location.href = "/";
        }}
      />

      <div className="actuaciones-container-columns">
        <div className="actuaciones-container-column1">
          {state.showInactive === false && (
            <ProjectsList
              projects={state.projects}
              selectedIndex={state.selectedProject}
              onProjectSelected={index => {
                dispatch({ type: "SELECT_PROJECT", index });
                getWorkers(state.projects[index].id);
              }}
            />
          )}
          {state.showInactive === true && (
            <InactiveProjectsList
              projects={state.inactiveProjects}
              selectedIndex={state.selectedInactiveProject}
              onProjectSelected={index =>
                dispatch({ type: "SELECT_INACTIVE_PROJECT", index })
              }
            />
          )}
          <button
            onClick={() => {
              dispatch({ type: "TOGGLE_SHOWN_PROJECTS" });
            }}
          >
            Actuaciones {!state.showInactive ? "Inactivas" : "Activas"}
          </button>

          <ActuacionesForm
            data={state.projects[state.selectedProject]}
            action={action}
            limpiar={() => dispatch({ type: "DESELECT_PROJECT" })}
          />
          <Project
            activeProject={state.showInactive}
            project={state.projects[state.selectedProject]}
            inactiveProject={
              state.inactiveProjects[state.selectedInactiveProject]
            }
            onDeactivateProject={id => {
              console.log(id);
              handleDeactivateProject(id);
            }}
            onUpdateProject={id => {
              console.log(id);
              handleUpdateProject(id);
            }}
          />
        </div>

        <div className="actuaciones-container-column2">
          <div className="actuaciones-container-info">
            <img
              src="https://www.ismedioambiente.com/wp-content/uploads/2019/04/Convenio-Europeo-del-Paisaje.jpg"
              style={{ width: "20em" }}
            />
            <label>{project.nombre}</label>
            <label>{project.direccion}</label>
            <label>{project.poblacion}</label>
            <label>{project.provincia}</label>
            <label>{project.descripcion}</label>
          </div>

          <div className="actuaciones-container-info">
            <WorkersList
              workers={state.workersAssociated}
              selectedIndex={-1}
              onWorkerSelected={() => {}}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
