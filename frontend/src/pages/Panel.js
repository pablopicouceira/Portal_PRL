import React, { useReducer, useEffect } from "react";
import { useAuth } from "../context/auth-context";

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
    <React.Fragment>
      <Header
        title="Portal Gestión PRL"
        show={[]}
        onLogout={e => {
          localStorage.removeItem("currentUser");
          window.location.href = "/";
        }}
      />
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
          <div>
            <DocumentsUploadedByUser />
          </div>
          <div>
            <WorkersRegisteredByUser />
          </div>
          <ProjectsCreatedByUser />
          <div className="victory">
            <div>
              <ReactMinimalPieChart
                animate
                animationDuration={5000}
                animationEasing="ease-out"
                cx={50}
                cy={50}
                data={[
                  {
                    color: "green",
                    title: "One",
                    value: valid
                  },
                  {
                    color: "yellow",
                    title: "Two",
                    value: expiring
                  },
                  {
                    color: "red",
                    title: "Three",
                    value: expired
                  }
                ]}
                label={false}
                labelPosition={100}
                lengthAngle={360}
                labelStyle={{
                  fill: "#121212",
                  fontFamily: "sans-serif",
                  fontSize: "5px"
                }}
                lineWidth={100}
                onClick={undefined}
                onMouseOut={undefined}
                onMouseOver={undefined}
                paddingAngle={0}
                radius={50}
                rounded={false}
                startAngle={0}
                viewBoxSize={[100, 100]}
              />
            </div>
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
                duration: 1000
              }}
              colorScale={["green", "yellow", "red"]}
              padding={{ top: 100, bottom: 100 }}
              theme={VictoryTheme.material}
            />
          </div>
        </section>
      </section>
      <Footer />
    </React.Fragment>
  );
}
