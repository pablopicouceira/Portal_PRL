import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
//import "../css/FileUpload.css";
import { uploadDocument, getDocumentsWorker } from "../http/workersService";
import "moment/locale/es";
import moment from "moment";
moment.locale("es");

const filesTypes = [
  { id: 1, name: "Formacion" },
  { id: 2, name: "Apto" },
  { id: 3, name: "Epis" }
];
function FileUpload({ worker }) {
  const [files, setFiles] = useState({});
  const [workerFiles, setWorkerFiles] = useState([]);

  useEffect(() => {
    if (worker)
      getDocumentsWorker(worker.id).then(result =>
        setWorkerFiles(result.data.data)
      );
  }, [worker]);

  const handleChange = (name, e) => {
    const newFiles = {
      ...files,
      [name]: {
        ...files[name],
        file: e.target.files
      }
    };
    setFiles(newFiles);
  };

  const handleDate = (name, e) => {
    const newFiles = {
      ...files,
      [name]: {
        ...files[name],
        date: e.target.value
      }
    };

    setFiles(newFiles);
  };

  const handleUpload = () => {
    if (worker) {
      Object.entries(files).forEach(([key, values]) => {
        const code = filesTypes.find(fT => fT.name == key).id;
        const data = new FormData();
        data.append("document", values.file[0]);
        data.append("fechaCaducidad", values.date);

        uploadDocument(worker.id, code, data);
      });
    } else {
      alert("selecciona un trabajador");
    }

    //data.append("files", file);

    return;

    /*
    axios
      .post(
        "http://localhost:8000/api/workers/8a78c214-b2f0-4585-b901-4f2a7f198c75/3/document",
        data
      )
      .then(response => {
        console.log(response);
        //setFiles([]);
        //setUploading(false);
      })
      .catch(error => {
        // setUploading(false);
        console.log(error);
      });
      */
  };

  const isExpired = date => {
    return moment(date).isBefore(new Date());
  };

  return (
    <div>
      <h3>Documentos:</h3>
      {filesTypes.map((fT, key) => {
        const file = workerFiles.find(f => fT.id == f.Requisitos_id);

        return (
          <div key={key}>
            <label>{fT.name}</label>
            <input
              type="file"
              accept=".pdf"
              onChange={e => handleChange(fT.name, e)}
            />
            {file && (
              <a
                href={file ? file.secureUrl : ""}
                target="_blank"
                style={{
                  color: isExpired(file.FechaCaducidad) ? "red" : "green"
                }}
              >
                {moment(file.FechaCaducidad).format("DD-MMM-YY")}
              </a>
            )}
            <div className="trabajadores-file-status" />
          </div>
        );
      })}

      <button onClick={() => handleUpload()}>Subir archivos</button>
    </div>
  );
  /*
  return (
    <main>
      <div
        className={`file-upload-container ${isDrag ? "drag" : ""} ${
          uploading ? "uploading" : ""
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input ref={fileInput} type="file" multiple onChange={handleChange} />
        <button type="button" onClick={openFileDialog} disabled={uploading}>
          {uploading ? "Uploading files ..." : "Choose Files or Drop"}
        </button>
        <ul className="upload-preview">
          {files.map((file, i) => (
            <li key={file.name}>
              <img src={previews[i]} alt={file.name} />
              <span>{file.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="upload-btn"
        type="button"
        onClick={handleUpload}
        disabled={uploading}
      >
        Upload
      </button>
    </main>
  );
  */
}

function getPreview(file) {
  return new Promise(resolve => {
    if (file && file.type.includes("image")) {
      let reader = new FileReader();

      reader.onloadend = function() {
        resolve(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      resolve("http://via.placeholder.com/50x50");
    }
  });
}

export default FileUpload;
