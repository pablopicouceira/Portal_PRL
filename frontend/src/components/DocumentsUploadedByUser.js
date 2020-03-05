import React, { useEffect, useState, Component } from "react";
import { getDocumentsByUser } from "../http/usersService";

export function DocumentsUploadedByUser({ documents }) {
  return (
    <h3>
      <span className="valoracion-span">{documents.length}</span> archivos
      subidos
    </h3>
  );
}
