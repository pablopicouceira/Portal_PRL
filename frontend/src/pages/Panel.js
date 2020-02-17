import React, { useReducer, useEffect } from "react";
import { useAuth } from "../context/auth-context";

import { Header } from "../components/Header";
import { ExpiredDocuments } from "../components/ExpiredDocuments";
import { TotalDocuments } from "../components/TotalDocuments";
import { WorkersCreatedByUser } from "../components/WorkersCreatedByUser";
import { getExpiredDocuments, getDocumentsUser } from "../http/workersService";
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
        <div className="trabajadores-container-column1">
          <p className="caja">Actuaciones</p>
          <p className="caja">Trabajadores</p>
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
            <TotalDocuments id={currentUser.user.id} />
          </div>
          <div>
            <WorkersCreatedByUser />
          </div>
          <div>
            <VictoryPie
              data={[
                { x: 1, y: 35, label: "Válidos" },
                { x: 2, y: 40, label: "Caducados" }
              ]}
              animate={{
                duration: 2000
              }}
              colorScale={["red", "green"]}
              padding={{ top: 100, bottom: 60 }}
              theme={VictoryTheme.material}
            />
            <VictoryLabel labelPlacement="vertical" />
          </div>
        </div>
      </div>
    </div>
  );
}
