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
  getExpiringDocuments
} from "../http/documentsService";
import { VictoryPie, VictoryTheme, VictoryLabel } from "victory";

function dashboardReducer(state, action) {
  switch (action.type) {
    case "GET_EXPIRED_DOCUMENTS":
      return { ...state, expiredDocuments: action.initialExpiredDocuments };
    case "GET_EXPIRING_DOCUMENTS":
      return { ...state, expiringDocuments: action.initialExpiringDocuments };
    case "GET_TOTAL_DOCUMENTS":
      return { ...state, totalDcouments: action.initialTotalDocuments };

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
    totalDocuments: null
  });

  useEffect(() => {
    getExpiredDocuments().then(response =>
      dispatch({
        type: "GET_EXPIRED_DOCUMENTS",
        initialExpiredDocuments: response.data
      })
    );
  }, []);

  useEffect(() => {
    getExpiringDocuments().then(response =>
      dispatch({
        type: "GET_EXPIRING_DOCUMENTS",
        initialExpiringDocuments: response.data
      })
    );
  }, []);

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
                { x: "Válidos", y: state.expiredDocuments.length },
                { x: "Próximos", y: state.expiringDocuments.length },
                { x: "Expirados", y: 40 }
              ]}
              animate={{
                duration: 5000
              }}
              colorScale={["green", "yellow", "red"]}
              padding={{ top: 100, bottom: 60 }}
              theme={VictoryTheme.material}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
