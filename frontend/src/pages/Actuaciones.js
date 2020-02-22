import React, { useState, useEffect, useReducer } from "react";
import {
  getProjects,
  getInactiveProjects,
  createProject,
  deactivateProject,
  updateProject,
  getNotAssociatedWorkersToProject,
  getWorkersFromProject,
  associateWorkerToProject
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
import { NotAssociatedWorkers } from "../components/NotAssociatedWorkers";

//import "../css/Actuaciones.css";
import ProjectInfo from "../components/ProjectInfo";

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
    case "SET_NOT_ASSOCIATED_WORKERS":
      return { ...state, notAssociatedWorkers: action.data };
    case "SET_ASSOCIATED_WORKERS":
      return { ...state, workersAssociated: action.data };
    case "SELECT_INACTIVE_PROJECT":
      return { ...state, selectedInactiveProject: action.index };
    case "CREATE_PROJECT":
      return { ...state, projects: [action.project, ...state.projects] };

    case "DESELECT_PROJECT":
      return { ...state, selectedProject: null };
    default:
      return state;
  }
}

export function Actuaciones() {
  const { currentUser } = useAuth();
  const [workerIdToAdd, setworkerIdToAdd] = useState("");
  const [state, dispatch] = useReducer(projectsReducer, {
    projects: [],
    inactiveProjects: [],
    selectedProject: 0, // si le asignamos valor 0 por defecto, la página "Actuaciones" se muestra con la obra seleccionada
    showInactive: false,
    selectedInactiveProject: null,
    notAssociatedWorkers: [],
    workersAssociated: []
  });

  const { register, errors, formState, handleSubmit, setError } = useForm();

  const getData = () => {
    getProjects().then(response => {
      dispatch({ type: "GET_PROJECTS", initialProjects: response.data });
      getWorkers(response.data[0].id);
    });
    getInactiveProjects().then(response => {
      dispatch({
        type: "GET_INACTIVE_PROJECTS",
        initialProjects: response.data
      });
    });
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
    getData();
  };

  const handleUpdateProject = id => {
    updateProject(id).then(() => {
      dispatch({ type: "UPDATE_PROJECT", id });
    });
  };

  const getWorkers = projectId => {
    getNotAssociatedWorkersToProject(projectId)
      .then(response => {
        console.log(response.data);

        dispatch({ type: "SET_NOT_ASSOCIATED_WORKERS", data: response.data });
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

  const addWorker = () => {
    associateWorkerToProject(
      state.projects[state.selectedProject].id,
      workerIdToAdd
    ).then(response => {
      getData();
      getWorkers(state.projects[state.selectedProject].id);
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
    <React.Fragment>
      <Header
        title="Portal Gestión PRL"
        show={["panel", "trabajadores"]}
        onLogout={e => {
          localStorage.removeItem("currentUser");
          window.location.href = "/";
        }}
      />

      <section className="actuaciones-columns-container">
        <section className="actuaciones-column1-container">
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
          {/*<button
            onClick={() => {
              dispatch({ type: "TOGGLE_SHOWN_PROJECTS" });
            }}
          >
            Actuaciones {!state.showInactive ? "Inactivas" : "Activas"}
          </button>*/}

          {state.selectedProject == null ? (
            <>
              <ActuacionesForm
                // data={state.projects[state.selectedProject]} (para incluir en el formulario los datos del proyecto seleccionado)
                action={action}
                limpiar={() => dispatch({ type: "DESELECT_PROJECT" })}
              />
            </>
          ) : (
            <>
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
              <button onClick={() => dispatch({ type: "DESELECT_PROJECT" })}>
                Crear nueva actuacion
              </button>
            </>
          )}
        </section>
        <section className="actuaciones-column2-container">
          <ProjectInfo project={project} getData={getData} />
        </section>

        <section className="actuaciones-column3-container">
          <div className="actuaciones-container-info">
            <WorkersList
              workers={state.workersAssociated}
              selectedIndex={-1}
              onWorkerSelected={() => {}}
            />
          </div>
          <div>
            <NotAssociatedWorkers
              workers={state.notAssociatedWorkers}
              onChange={val => {
                console.log(val);
                setworkerIdToAdd(val);
              }}
            />
            <button onClick={() => addWorker()}>Agregar</button>
          </div>
        </section>
      </section>
      <Footer />
    </React.Fragment>
  );
}
