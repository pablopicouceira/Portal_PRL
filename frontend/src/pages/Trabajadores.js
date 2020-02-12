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
  const { register, errors, formState, handleSubmit, setError } = useForm(
    //{ mode: "onBlur", defaultValues: worker});

    useEffect(
      () => {
        getWorkers(currentUser.accessToken).then(response =>
          dispatch({ type: "GET_WORKERS", initialWorkers: response.data })
        );

        getInactiveWorkers(currentUser.accessToken).then(response =>
          dispatch({
            type: "GET_INACTIVE_WORKERS",
            initialWorkers: response.data
          })
        );
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

  return (
    <React.Fragment>
      {state.showInactive === false && (
        <WorkersList
          workers={state.workers}
          selectedIndex={state.selectedWorker}
          onWorkerSelected={index => dispatch({ type: "SELECT_WORKER", index })}
        />
      )}
      {console.log(state.showInactive, "state inactive")}
      {state.showInactive && (
        <InactiveWorkersList
          workers={state.inactiveWorkers}
          selectedIndex={state.selectedInactiveWorker}
          onWorkerSelected={index =>
            dispatch({ type: "SELECT_INACTIVE_WORKER", index })
          }
        />
      )}

      <button
        onClick={() => {
          dispatch({ type: "TOGGLE_SHOWN_WORKERS" });
        }}
      >
        Trabajadores {!state.showInactive ? "Inactivos" : "Activos"}
      </button>

      <form onSubmit={handleSubmit(handleRegister)}>
        <div
          className={`form-control ${
            errors.name ? "ko" : formState.touched.name && "ok"
          }`}
        >
          <label>Apellidos</label>
          <input
            ref={register({
              required: "The name is mandatory"
            })}
            name="apellidos"
            type="text"
            placeholder="Please enter your name"
          ></input>
          {errors.name && (
            <span className="errorMessage">{errors.name.message}</span>
          )}
        </div>
        <div
          className={`form-control ${
            errors.email ? "ko" : formState.touched.email && "ok"
          }`}
        >
          <label>Nombre</label>
          <input
            ref={register({
              required: "The email is mandatory"
              /*pattern: {
                message: "The email is not valid",
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              }*/
            })}
            name="nombre"
            type="text"
            placeholder="Please enter your email"
          ></input>
          {errors.email && (
            <span className="errorMessage">{errors.email.message}</span>
          )}
        </div>
        <div
          className={`form-control ${
            errors.password ? "ko" : formState.touched.password && "ok"
          }`}
        >
          <label>DNI</label>
          <input
            ref={register({
              required: "The password is mandatory",
              minLength: {
                message: "Password length should be greater than 6",
                value: 6
              }
            })}
            name="dni"
            type="text"
            placeholder="Please enter your password"
          ></input>
          {errors.password && (
            <span className="errorMessage">{errors.password.message}</span>
          )}
        </div>
        <div className="btn-container">
          <button
            type="submit"
            className="btn"
            disabled={formState.isSubmitting}
            onSubmit={handleSubmit(handleRegister)}
          >
            + Nuevo trabajador
          </button>
          <div className="m-t-lg">
            <Link to="/login">Already have an account, please sign in</Link>
          </div>
        </div>
      </form>

      <Worker
        activeWorker={state.showInactive}
        worker={state.workers[state.selectedWorker]}
        inactiveWorker={state.inactiveWorkers[state.selectedInactiveWorker]}
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
    </React.Fragment>
  );
}
