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
          src={
            project.imageUrl ||
            "https://www.ismedioambiente.com/wp-content/uploads/2019/04/Convenio-Europeo-del-Paisaje.jpg"
          }
          style={{ width: "100%" }}
          onClick={() => imagepickerRef.click()}
        />
      </div>
      <div>
        <label>{project.nombre}</label>
      </div>

      <div>
        <label>
          {project.direccion}, {project.poblacion} ({project.provincia})
        </label>
      </div>

      <div style={{ overflow: "scroll" }}>
        <label>{project.descripcion}</label>
      </div>
    </>
  );
}
