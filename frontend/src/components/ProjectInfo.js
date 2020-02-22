import React from "react";
import { uploadImageProject } from "../http/projectsService";

export default function ProjectInfo({ project, getData }) {
  let imagepickerRef = null;
  const uploadImage = e => {
    const data = new FormData();
    data.append("image", e.target.files[0]);

    uploadImageProject(project.id, data).then(() => {
      getData();
    });
  };

  if (!project.id) return <></>;

  return (
    <>
      <div>
        <input
          ref={ref => {
            imagepickerRef = ref;
          }}
          type="file"
          style={{ display: "none" }}
          onChange={e => uploadImage(e)}
        />
        <img
          className="img"
          src={
            project.imageUrl ||
            "https://via.placeholder.com/300x200?text=dogLegs+Portal+Gestión+PRL"
          }
          style={{ width: "100%" }}
          onClick={() => imagepickerRef.click()}
        />
      </div>
      <div>
        <h1>{project.nombre}</h1>
      </div>

      <div>
        <h2>
          {project.direccion}, {project.poblacion} ({project.provincia})
        </h2>
      </div>

      <div className="actuaciones-column2-container-description">
        <p>{project.descripcion}</p>
      </div>
    </>
  );
}
