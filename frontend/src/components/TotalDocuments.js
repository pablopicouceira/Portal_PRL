import React, { useEffect, useState, Component } from "react";
import { getDocumentsUser } from "../http/workersService";

export function TotalDocuments({ id }) {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    getDocumentsUser(id).then(response => setDocuments(response.data));
  }, []);
  console.log(documents);
  return <h1>Has subido {documents.length} archivos</h1>;
}
