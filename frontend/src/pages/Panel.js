import React, { useReducer, useEffect } from "react";
import { useAuth } from "../context/auth-context";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

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

  return (
    <div>
      <Header title="Portal Gestión PRL" />
      <div className="trabajadores-container-columns">
        <div className="panel-container-column1">
          <button type="button" onclick="changeColor(this.parentNode)">
            Actuaciones{" "}
          </button>

          <button type="button" onclick="changeColor(this.parentNode)">
            Trabajadores{" "}
          </button>
        </div>

        <div className="trabajadores-container-column2">
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
        </div>
        <div className="trabajadores-container-column3">
          <div>
            <DocumentsUploadedByUser />
          </div>
          <div>
            <WorkersRegisteredByUser />
          </div>
          <ProjectsCreatedByUser />
          <div>
            <VictoryPie
              data={[
                {
                  x: `Válidos (${((valid / total) * 100).toFixed(2)}%)`,
                  y: valid
                },
                {
                  x: `Próximos (${((expiring / total) * 100).toFixed(2)}%)`,
                  y: expiring
                },
                {
                  x: `Expirados (${((expired / total) * 100).toFixed(2)}%)`,
                  y: expired
                }
              ]}
              animate={{
                duration: 10000
              }}
              colorScale={["green", "yellow", "red"]}
              padding={{ top: 150, bottom: 60 }}
              theme={VictoryTheme.material}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
