import React, { useEffect, useState, Component } from "react";
import { getDocumentsUser } from "../http/workersService";

// export function TotalDocuments({ id }) {
//   const [total, setTotal] = useState(null);
//     useEffect(() => {
//         getDocumentsUser(id).then(response =>
//             setTotal(response.data.length)
//         )
//     }
// }, []);

//   console.log(total);

//   return
//     <div className="App">
//           <h1>Has subido {total} archivos</h1>

//     </div>

// }

export function TotalDocuments({ id }) {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    getDocumentsUser(id).then(response => setDocuments(response.data));
  }, []);
  console.log(documents);
  return <h1>Hola, has subido {documents.length} archivos</h1>;
}
