import React, { useReducer, useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import moment from "moment";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ReactMinimalPieChart from "react-minimal-pie-chart";

import { ExpiredDocuments } from "../components/ExpiredDocuments";
import { ExpiringDocuments } from "../components/ExpiringDocuments";
import { DocumentsUploadedByUser } from "../components/DocumentsUploadedByUser";
import { WorkersRegisteredByUser } from "../components/WorkersRegisteredByUser";
import { ProjectsCreatedByUser } from "../components/ProjectsCreatedByUser";
import {
  getExpiredDocuments,
  getExpiringDocuments,
  getNotObsoletDocuments
} from "../http/documentsService";
import {
  getDocumentsByUser,
  getWorkersByUser,
  getProjectsByUser
} from "../http/usersService";

import { VictoryPie, VictoryTheme, VictoryLabel } from "victory";

function dashboardReducer(state, action) {
  switch (action.type) {
    case "GET_EXPIRED_DOCUMENTS":
      return { ...state, expiredDocuments: action.initialExpiredDocuments };
    case "GET_EXPIRING_DOCUMENTS":
      return { ...state, expiringDocuments: action.initialExpiringDocuments };
    case "GET_NOT_OBSOLETE_DOCUMENTS":
      return {
        ...state,
        notObsoletDocuments: action.initialNotObsoletDocuments
      };

    default:
      return state;
  }
}

export function Panel() {
  const year = moment().get("Y");
  const [dates, setDates] = useState({
    minDate: `2019-01-01`,
    maxDate: `${year}-12-30`
  });
  const { currentUser } = useAuth();
  const [state, dispatch] = useReducer(dashboardReducer, {
    expiredDocuments: [],
    expiringDocuments: [],
    selectedDocument: null,
    notObsoletDocuments: []
  });

  useEffect(() => {
    getExpiredDocuments().then(response =>
      dispatch({
        type: "GET_EXPIRED_DOCUMENTS",
        initialExpiredDocuments: response.data
      })
    );
  }, []);
  let expired = state.expiredDocuments.length;

  useEffect(() => {
    getExpiringDocuments().then(response =>
      dispatch({
        type: "GET_EXPIRING_DOCUMENTS",
        initialExpiringDocuments: response.data
      })
    );
  }, []);
  let expiring = state.expiringDocuments.length;

  useEffect(() => {
    getNotObsoletDocuments().then(response =>
      dispatch({
        type: "GET_NOT_OBSOLETE_DOCUMENTS",
        initialNotObsoletDocuments: response.data
      })
    );
  }, []);

  let valid = state.notObsoletDocuments.length - expired - expiring;

  let total = expired + expiring + valid;

  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    getDocumentsByUser(dates).then(response => setDocuments(response.data));
  }, [dates]);

  const [workers, setWorkers] = useState([]);
  useEffect(() => {
    getWorkersByUser(dates).then(response => setWorkers(response.data));
  }, [dates]);

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjectsByUser(dates).then(response => setProjects(response.data));
  }, [dates]);

  return (
    <React.Fragment>
      <Header
        title="H&S Docs Manager"
        show={[]}
        onLogout={e => {
          localStorage.removeItem("currentUser");
          window.location.href = "/";
        }}
      />

      <i className="fas sign-out-alt " />
      <section className="panel-columns-container">
        <section className="panel-column1-container">
          <a href="/actuaciones" class="circlebutton">
            Actuaciones
          </a>
          <a href="/trabajadores" class="circlebutton">
            Trabajadores
          </a>
        </section>

        <section className="panel-column2-container">
          <div>
            <ExpiredDocuments
              documents={state.expiredDocuments}
              selectedIndex={state.selectedDocument}
              onDocumentSelected={index =>
                dispatch({ type: "SELECT_DOCUMENT", index })
              }
            />
          </div>
          <div>
            <ExpiringDocuments
              documents={state.expiringDocuments}
              selectedIndex={state.selectedDocument}
              onDocumentSelected={index =>
                dispatch({ type: "SELECT_DOCUMENT", index })
              }
            />
          </div>
        </section>
        <section className="panel-column3-container">
          <h2>Datos:</h2>
          <div className="panel-column3-container-datos">
            <div>
              <div>
                <DocumentsUploadedByUser documents={documents} />
              </div>
              <div>
                <WorkersRegisteredByUser workers={workers} />
              </div>

              <div>
                <ProjectsCreatedByUser projects={projects} />
              </div>
            </div>

            <div className="panel-column3-container-inputs-valoracion">
              <div>
                <input
                  className="select"
                  type="date"
                  value={dates.minDate}
                  onChange={e =>
                    setDates(dates => ({ ...dates, minDate: e.target.value }))
                  }
                />
                <input
                  className="select"
                  type="date"
                  value={dates.maxDate}
                  onChange={e =>
                    setDates(dates => ({ ...dates, maxDate: e.target.value }))
                  }
                />
              </div>
              <div className="panel-column3-container-valoracion">
                Valoración:{" "}
                {(
                  documents.length * 0.1 +
                  workers.length * 0.5 +
                  projects.length * 1
                ).toFixed(1)}
              </div>
            </div>
          </div>

          <div className="victory">
            <VictoryPie
              data={[
                {
                  x: `Válidos (${((valid / total) * 100).toFixed(0)}%)`,
                  y: valid
                },
                {
                  x: `< 1 mes (${((expiring / total) * 100).toFixed(0)}%)`,
                  y: expiring
                },
                {
                  x: `Expirados (${((expired / total) * 100).toFixed(0)}%)`,
                  y: expired
                }
              ]}
              animate={{
                duration: 1000
              }}
              colorScale={["green", "yellow", "red"]}
              padding={{ top: 75, bottom: 125 }}
              theme={VictoryTheme.material}
            />
          </div>
        </section>
      </section>
      <Footer />
    </React.Fragment>
  );
}
