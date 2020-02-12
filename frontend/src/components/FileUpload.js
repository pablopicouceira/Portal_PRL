import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../css/FileUpload.css";

function FileUpload() {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [previews, setPreviews] = useState([]);
  const [isDrag, setDrag] = useState(false);
  const fileInput = useRef();

  useEffect(() => {
    async function getPreviews() {
      const promises = files.map(getPreview);
      setPreviews(await Promise.all(promises));
    }

    getPreviews();
  }, [files]);

  const handleDrop = e => {
    e.preventDefault();

    const draggedFiles = [];

    if (e.dataTransfer.items) {
      Array.from(e.dataTransfer.items).forEach(item => {
        if (item.kind === "file") {
          let file = item.getAsFile();
          console.log(file);
          draggedFiles.push(file);
        }
      });
    } else {
      Array.from(e.dataTransfer.files).forEach(file => {
        console.log(file);
        draggedFiles.push(file);
      });
    }

    setFiles([...draggedFiles, ...files]);
    setDrag(false);
  };

  const handleChange = e => {
    setFiles([...Array.from(e.target.files), ...files]);
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

  const handleDragOver = e => {
    e.preventDefault();
    setDrag(true);
  };

  const handleDragLeave = e => {
    e.preventDefault();
    setDrag(false);
  };

  const openFileDialog = () => {
    fileInput.current.click();
  };

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
