import React, { useState, useEffect, useReducer } from "react";
import { getWorkers } from "../http/workersService";
import { WorkersList } from "../components/WorkersList";
import { Worker } from "../components/Worker";
import { useAuth } from "../context/auth-context";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { createWorker } from "../http/workersService";

function workersReducer(state, action) {
  switch (action.type) {
    case "GET_WORKERS":
      return { ...state, workers: action.initialWorkers };
    case "SELECT_WORKER":
      return { ...state, selectedWorker: action.index };
    case "CREATE_WORKER":
      return { ...state, workers: [action.worker, ...state.workers] };
    default:
      return state;
  }
}

export function Trabajadores() {
  const { currentUser } = useAuth();
  const [state, dispatch] = useReducer(workersReducer, {
    workers: [],
    selectedWorker: null
  });
  const { register, errors, formState, handleSubmit, setError } = useForm();

  useEffect(() => {
    getWorkers(currentUser.accessToken).then(response =>
      dispatch({ type: "GET_WORKERS", initialWorkers: response.data })
    );
  }, [state.workers.length]);

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

  return (
    <React.Fragment>
      <WorkersList
        workers={state.workers}
        selectedIndex={state.selectedWorker}
        onWorkerSelected={index => dispatch({ type: "SELECT_WORKER", index })}
      />

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

      <Worker worker={state.workers[state.selectedWorker]} />
    </React.Fragment>
  );
}
