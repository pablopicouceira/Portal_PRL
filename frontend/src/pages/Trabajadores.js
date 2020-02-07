import React, { useState, useEffect, useReducer } from "react";
import { getWorkers } from "../http/workersService";
import { WorkersList } from "../components/WorkersList";
import { useAuth } from "../context/auth-context";

function workersReducer(state, action) {
  switch (action.type) {
    case "GET_WORKERS":
      return { ...state, workers: action.initialWorkers };
    case "SELECT_WORKER":
      return { ...state, selectedWorker: action.index };
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

  useEffect(() => {
    getWorkers(currentUser.accessToken).then(response =>
      dispatch({ type: "GET_WORKERS", initialWorkers: response.data })
    );
  }, []);

  return (
    <WorkersList
      workers={state.workers}
      selectedIndex={state.selectedWorker}
      onWorkerSelected={index => dispatch({ type: "SELECT_WORKER", index })}
    />
  );
}
