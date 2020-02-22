//@ts-check
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export function ActuacionesForm({ data, action, limpiar }) {
  const { errors, register, handleSubmit, formState, reset } = useForm();

  useEffect(() => {
    reset(data);
  }, [data]);

  return (
    <div className="actuaciones-form">
      <form onSubmit={handleSubmit(action)}>
        <h3>Datos de la Actuación:</h3>
        <div
          className={`form-control ${
            errors.name ? "ko" : formState.touched.name && "ok"
          }`}
        >
          <label>Nombre</label>
          <input
            ref={register({
              required: "The name is mandatory"
            })}
            defaultValue={data.nombre ? data.nombre : ""}
            name="nombre"
            type="text"
            placeholder="Nombre de la Actuación"
          ></input>
          {errors.name && (
            <span className="errorMessage">{errors.name.message}</span>
          )}
        </div>
        <div
          className={`form-control ${
            errors.email ? "ko" : formState.touched.email && "ok"
          }`}
        >
          <label>Dirección</label>
          <input
            ref={register({
              required: "Dirección"
            })}
            defaultValue={data.direccion}
            name="direccion"
            type="text"
            placeholder="Dirección"
          ></input>
          {errors.email && (
            <span className="errorMessage">{errors.email.message}</span>
          )}
        </div>
        <div
          className={`form-control ${
            errors.password ? "ko" : formState.touched.password && "ok"
          }`}
        >
          <label>Población</label>
          <input
            ref={register({
              required: "The password is mandatory"
            })}
            defaultValue={data.poblacion}
            name="poblacion"
            type="text"
            placeholder="Población"
          ></input>
          {errors.password && (
            <span className="errorMessage">{errors.password.message}</span>
          )}
        </div>
        <div
          className={`form-control ${
            errors.password ? "ko" : formState.touched.password && "ok"
          }`}
        >
          <label>Provincia</label>
          <input
            ref={register({
              required: "The password is mandatory"
            })}
            defaultValue={data.provincia}
            name="provincia"
            type="text"
            placeholder="Provincia"
          ></input>
          {errors.password && (
            <span className="errorMessage">{errors.password.message}</span>
          )}
        </div>
        <div
          className={`form-control ${
            errors.password ? "ko" : formState.touched.password && "ok"
          }`}
        >
          <label>Descripción</label>
          <input
            ref={register({
              required: "The password is mandatory"
            })}
            defaultValue={data.provincia}
            name="descripcion"
            type="text"
            placeholder="Descripción de la Actuación"
          ></input>
          {errors.password && (
            <span className="errorMessage">{errors.password.message}</span>
          )}
        </div>
        <div className="btn-container">
          <button
            type="submit"
            className="actuaciones-column1-square-btn"
            disabled={formState.isSubmitting}
            onSubmit={handleSubmit(action)}
          >
            {Object.keys(data).length ? "Actualizar datos" : "Guardar"}
          </button>
          {/*          <button
            className="actuaciones-column1-square-btn"
            disabled={formState.isSubmitting}
            onClick={() => {
              limpiar();
            }}
          >
            Limpiar Formulario
          </button>*/}
        </div>
      </form>
    </div>
  );
}

ActuacionesForm.defaultProps = {
  data: {},
  action: () => {}
};
