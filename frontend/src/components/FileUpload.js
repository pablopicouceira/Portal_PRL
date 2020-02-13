import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../css/FileUpload.css";

function FileUpload() {
  const [files, setFiles] = useState({});
  const [uploading, setUploading] = useState(false);
  const [previews, setPreviews] = useState([]);
  const [isDrag, setDrag] = useState(false);
  const fileInput = useRef();

  const handleChange = (name, e) => {
    const newFiles = {
      ...files,
      [name]: {
        file: e.target.files
      }
    };
    setFiles(newFiles);
  };

  const handleUpload = () => {
    if (!files) {
      return;
    }

    const data = new FormData();

    files.forEach(file => {
      data.append("files", file);
    });

    setUploading(true);

    axios
      .post(
        "http://localhost:8000/api/workers/8a78c214-b2f0-4585-b901-4f2a7f198c75/3/document",
        data
      )
      .then(response => {
        console.log(response);
        setFiles([]);
        setUploading(false);
      })
      .catch(error => {
        setUploading(false);
        console.log(error);
      });
  };

  const filesTypes = ["Epis", "Apto", "Formación"];

  console.log(files);

  return (
    <div>
      Subir archivos
      {filesTypes.map(fT => (
        <div>
          <label>{fT}</label>
          <input
            type="file"
            accept=".pdf"
            onChange={e => handleChange(fT, e)}
          />
          <input type="date" />
        </div>
      ))}
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
