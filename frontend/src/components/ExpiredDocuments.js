import React from "react";
//import "../css/ExpiredDocuments.css";

export function ExpiredDocuments({ documents }) {
  const now = new Date();
  return (
    <React.Fragment>
      <h2>Expiraron hace:</h2>
      <ul className="expired" className="panel-column2-container1">
        {documents.map((document, index) => (
          <li key={document.id}>
            <a href={document.secureUrl} target="_blank">
              {Math.round(
                (Date.now() -
                  new Date(
                    `${document.FechaCaducidad.substring(0, 10)}`
                  ).getTime()) /
                  (1000 * 60 * 60 * 24)
              )}{" "}
              días - {document.apellidos}, {document.nombre} - {document.tipo}
            </a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
