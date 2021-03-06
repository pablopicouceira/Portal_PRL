// @ts-check
import React, { useState, useEffect, useReducer } from "react";
import {
  getWorkers,
  getInactiveWorkers,
  createWorker,
  deactivateWorker,
  updateWorker,
  reactivateWorker
} from "../http/workersService";
import { WorkersList } from "../components/WorkersList";
import { Worker } from "../components/Worker";
import { useAuth } from "../context/auth-context";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { InactiveWorkersList } from "../components/InactiveWorkersList";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import FileUpload from "../components/FileUpload";
//import "../css/Trabajadores.css";
import { TrabajadoresForm } from "../components/TrabajadoresForm";
import ProjectsFromWorker from "../components/ProjectsFromWorker";

function workersReducer(state, action) {
  switch (action.type) {
    case "GET_WORKERS":
      return { ...state, workers: action.initialWorkers };
    case "GET_INACTIVE_WORKERS":
      return { ...state, inactiveWorkers: action.initialWorkers };
    case "TOGGLE_SHOWN_WORKERS":
      return {
        ...state,
        showInactive: !state.showInactive,
        selectedWorker: null,
        selectedInactiveWorker: null
      };
    case "SELECT_WORKER":
      return { ...state, selectedWorker: action.index };
    case "SELECT_INACTIVE_WORKER":
      return { ...state, selectedInactiveWorker: action.index };
    case "CREATE_WORKER":
      return { ...state, workers: [action.worker, ...state.workers] };
    case "DEACTIVATE_WORKER":
      return {
        ...state,
        workers: state.workers.filter(w => w.id !== action.id)
      };
    case "REACTIVATE_WORKER":
      return {
        ...state,
        workers: state.inactiveWorkers.filter(w => w.id !== action.id)
      };
    case "DESELECT_WORKER": //Al deseleccionar el trabajdor, se limpia el formulario porque no tiene ningún trabajador seleccionado
      return { ...state, selectedWorker: null };
    case "GET_PROJECTS_FROM_WORKER":
      return { ...state };
    default:
      return state;
  }
}

export function Trabajadores() {
  const { currentUser } = useAuth();
  const [state, dispatch] = useReducer(workersReducer, {
    workers: [],
    inactiveWorkers: [],
    selectedWorker: null,
    showInactive: false,
    selectedInactiveWorker: null
  });
  const { register, errors, formState, handleSubmit, setError } = useForm();

  const getData = () => {
    getWorkers().then(response =>
      dispatch({ type: "GET_WORKERS", initialWorkers: response.data })
    );

    getInactiveWorkers().then(response =>
      dispatch({
        type: "GET_INACTIVE_WORKERS",
        initialWorkers: response.data
      })
    );
  };

  //{ mode: "onBlur", defaultValues: worker});
  useEffect(
    () => {
      getData();
    },
    [state.workers.length],
    [state.inactiveWorkers.length],
    state.showInactive
  );
  const handleRegister = formData => {
    return createWorker(currentUser.accessToken, formData)
      .then(response => {
        dispatch({ type: "DESELECT_WORKER" });
        dispatch({ type: "CREATE_WORKER", worker: response.data });
        console.log(response.data);
      })
      .catch(error => {
        if (error.response.status === 409) {
          setError("email", "conflict", "The email you entered already exists");
        }
      });
  };

  const action = formData => {
    if (state.selectedWorker != null) {
      const worker = state.workers[state.selectedWorker];
      updateWorker(worker.id, formData)
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

  const handleDeactivateWorker = id => {
    deactivateWorker(id).then(() => {
      dispatch({ type: "DEACTIVATE_WORKER", id });
    });
  };

  const handleReactivateWorker = id => {
    reactivateWorker(id).then(() => {
      dispatch({ type: "REACTIVATE_WORKER", id });
    });
  };

  const handleUpdateWorker = id => {
    updateWorker(id).then(() => {
      dispatch({ type: "UPDATE_WORKER", id });
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

  return (
    <React.Fragment>
      <Header
        title="H&S Docs Manager
"
        show={["panel", "actuaciones"]}
        onLogout={e => {
          localStorage.removeItem("currentUser");
          window.location.href = "/";
        }}
      />

      <section className="trabajadores-columns-container">
        <section className="trabajadores-column1-container">
          {state.showInactive === false && (
            <WorkersList
              workers={state.workers}
              selectedIndex={state.selectedWorker}
              onWorkerSelected={index =>
                dispatch({ type: "SELECT_WORKER", index })
              }
            />
          )}
          {state.showInactive === true && (
            <InactiveWorkersList
              workers={state.inactiveWorkers}
              selectedIndex={state.selectedInactiveWorker}
              onWorkerSelected={index =>
                dispatch({ type: "SELECT_INACTIVE_WORKER", index })
              }
            />
          )}

          <button
            className="trabajadores-inactivos"
            onClick={() => {
              dispatch({ type: "TOGGLE_SHOWN_WORKERS" });
            }}
          >
            Trabajadores {!state.showInactive ? "Inactivos" : "Activos"}
          </button>
        </section>
        <section className="trabajadores-column2-container">
          <div>
            <TrabajadoresForm
              className="trabajadores-column2-container input"
              data={state.workers[state.selectedWorker]}
              action={action}
              limpiar={() => dispatch({ type: "DESELECT_WORKER" })}
              activeWorker={state.showInactive}
              worker={state.workers[state.selectedWorker]}
              inactiveWorker={
                state.inactiveWorkers[state.selectedInactiveWorker]
              }
              onDeactivateWorker={id => {
                console.log(id);
                handleDeactivateWorker(id);
              }}
              onReactivateWorker={id => {
                console.log(id);
                handleReactivateWorker(id);
              }}
            />
          </div>
          <div>
            <FileUpload
              worker={getWorker()}
              className="trabajadores-column2-container input"
            />
          </div>
        </section>
        <section className="trabajadores-column3-container">
          <ProjectsFromWorker worker={getWorker()} />
        </section>
      </section>
      <Footer />
    </React.Fragment>
  );
}
