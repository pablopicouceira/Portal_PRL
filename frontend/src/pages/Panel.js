import React, { useReducer, useEffect } from "react";
import { useAuth } from "../context/auth-context";

import { Header } from "../components/Header";
import { ExpiredDocuments } from "../components/ExpiredDocuments";
import { TotalDocuments } from "../components/TotalDocuments";
import { getExpiredDocuments, getDocumentsUser } from "../http/workersService";

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
      <div>
        <div>
          <p className="caja">Actuaciones</p>
          <p className="caja">Trabajadores</p>
        </div>

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
          <TotalDocuments id={currentUser.user.id} />
        </div>
      </div>
    </div>
  );
}
