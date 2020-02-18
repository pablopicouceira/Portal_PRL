import React, { useEffect, useState, Component } from "react";
import { getDocumentsByUser } from "../http/usersService";

export function DocumentsUploadedByUser() {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    getDocumentsByUser().then(response => setDocuments(response.data));
  }, []);
  console.log(documents);
  return <h1>{documents.length} archivos subidos</h1>;
}
