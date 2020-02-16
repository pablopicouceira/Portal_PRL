import React, { useReducer, useEffect } from "react";
import { useAuth } from "../context/auth-context";

import { Header } from "../components/Header";
import { ExpiredDocuments } from "../components/ExpiredDocuments";
import { getExpiredDocuments } from "../http/workersService";

function dashboardReducer(state, action) {
  switch (action.type) {
    case "GET_EXPIRED_DOCUMENTS":
      return { ...state, expiredDocuments: action.initialExpiredDocuments };
    default:
      return state;
  }
}

export function Panel() {
  const { currentUser } = useAuth();
  const [state, dispatch] = useReducer(dashboardReducer, {
    expiredDocuments: [],
    selectedDocument: null
  });

  useEffect(() => {
    getExpiredDocuments().then(response =>
      dispatch({
        type: "GET_EXPIRED_DOCUMENTS",
        initialExpiredDocuments: response.data
      })
    );
  });

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
      </div>
    </div>
  );
}
