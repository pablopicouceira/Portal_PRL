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
import FileUpload from "../components/FileUpload";
import "../css/Trabajadores.css";
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
    case "GET_PROJECTS_FROM_wORKER":
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

  const { register, errors, formState, handleSubmit, setError } = useForm(
    //{ mode: "onBlur", defaultValues: worker});

    useEffect(
      () => {
        getData();
      },
      [state.workers.length],
      [state.inactiveWorkers.length],
      state.showInactive
    )
  );
  const handleRegister = formData => {
    return createWorker(currentUser.accessToken, formData)
      .then(response => {
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
    if (state.selectedWorker) {
      const selected = state.workers[state.selectedWorker];

      if (selected) {
        return selected;
      }
    }

    return null;
  };

  return (
    <div>
      <Header
        title="Portal Gestión PRL"
        onLogout={e => {
          localStorage.removeItem("currentUser");
          window.location.href = "/";
        }}
      />

      <div className="trabajadores-container-columns">
        <div className="trabajadores-container-column1">
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
        </div>
        <div className="trabajadores-container-column2">
          <div className=".trabajadores-container-column2 input">
            <TrabajadoresForm
              data={state.workers[state.selectedWorker]}
              action={action}
              limpiar={() => dispatch({ type: "DESELECT_WORKER" })}
            />

            <Worker
              activeWorker={state.showInactive}
              worker={state.workers[state.selectedWorker]}
              inactiveWorker={
                state.inactiveWorkers[state.selectedInactiveWorker]
              }
              onDeactivateWorker={id => {
                console.log(id);
                handleDeactivateWorker(id);
              }}
              onUpdateWorker={id => {
                console.log(id);
                handleUpdateWorker(id);
              }}
              onReactivateWorker={id => {
                console.log(id);
                handleReactivateWorker(id);
              }}
            />
          </div>
          <div>
            <FileUpload />
          </div>
        </div>
        <div className="trabajadores-container-column3">
          <ProjectsFromWorker worker={getWorker()} />
        </div>
      </div>

      <button
        onClick={() => {
          dispatch({ type: "TOGGLE_SHOWN_WORKERS" });
        }}
      >
        Trabajadores {!state.showInactive ? "Inactivos" : "Activos"}
      </button>
    </div>
  );
}
