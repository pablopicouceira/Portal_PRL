import React, { useReducer, useEffect } from "react";
import { useAuth } from "../context/auth-context";

import { Header } from "../components/Header";
import { ExpiredDocuments } from "../components/ExpiredDocuments";
import { DocumentsUploadedByUser } from "../components/DocumentsUploadedByUser";
import { WorkersRegisteredByUser } from "../components/WorkersRegisteredByUser";
import { ProjectsCreatedByUser } from "../components/ProjectsCreatedByUser";
import { getExpiredDocuments } from "../http/workersService";
import { VictoryPie, VictoryTheme, VictoryLabel } from "victory";

function dashboardReducer(state, action) {
  switch (action.type) {
    case "GET_EXPIRED_DOCUMENTS":
      return { ...state, expiredDocuments: action.initialExpiredDocuments };
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
                { x: "Válidos", y: 100 },
                { x: "Caducados", y: 40 }
              ]}
              animate={{
                duration: 2000
              }}
              colorScale={["green", "red"]}
              padding={{ top: 100, bottom: 60 }}
              theme={VictoryTheme.material}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
