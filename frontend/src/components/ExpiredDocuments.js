import React from "react";

export function ExpiredDocuments({ documents }) {
  const now = new Date();
  return (
    <React.Fragment>
      <div className="App">
        <h1>Expiraron hace:</h1>
        <ul className="li">
          {documents.map((document, index) => (
            <li key={document.id}>
              {document.FechaCaducidad} {document.apellidos}, {document.nombre}{" "}
              - {document.tipo}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
