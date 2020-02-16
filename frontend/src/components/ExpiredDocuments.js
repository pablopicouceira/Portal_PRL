import React from "react";

export function ExpiredDocuments({
  documents,
  selectedIndex,
  onDocumentSelected
}) {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Documentos expirados</h1>
        <ul className="li">
          {documents.map((document, index) => (
            <li
              key={document.id}
              onClick={() => onDocumentSelected(index)}
              className={selectedIndex === index && "WorkersList-selected"}
            >
              {document.apellidos}, {document.nombre} - {document.tipo}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
