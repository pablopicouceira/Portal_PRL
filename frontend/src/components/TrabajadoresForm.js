//@ts-check
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Worker } from "./Worker";

export function TrabajadoresForm({
  data,
  action,
  limpiar,
  activeWorker,
  worker,
  onDeactivateWorker,
  onReactivateWorker,
  inactiveWorker
}) {
  const { errors, register, handleSubmit, formState, reset } = useForm();

  useEffect(() => {
    reset(data);
  }, [data]);

  return (
    <form onSubmit={handleSubmit(action)}>
      <h3>Datos Personales:</h3>
      <div
        className={`form-control ${
          errors.name ? "ko" : formState.touched.name && "ok"
        }`}
      >
        <label>Apellidos</label>
        <input
          ref={register({
            required: "The name is mandatory"
          })}
          defaultValue={data.apellidos ? data.apellidos : ""}
          name="apellidos"
          type="text"
          placeholder="Introducir apellidos"
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
        <label>Nombre</label>
        <input
          ref={register({
            required: "The email is mandatory"
            /*pattern: {
                message: "The email is not valid",
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              }*/
          })}
          defaultValue={data.nombre}
          name="nombre"
          type="text"
          placeholder="Introducir nombre"
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
        <label>DNI</label>
        <input
          ref={register({
            required: "The password is mandatory",
            minLength: {
              message: "Password length should be greater than 6",
              value: 6
            }
          })}
          name="dni"
          defaultValue={data.dni}
          type="text"
          placeholder="Introducir DNI"
        ></input>
        {errors.password && (
          <span className="errorMessage">{errors.password.message}</span>
        )}
      </div>
      <div className="btn-container">
        <button
          className="trabajadores-column1-square-btn"
          type="submit"
          disabled={formState.isSubmitting}
          onSubmit={() => {
            handleSubmit(action);
            reset({});
          }}
        >
          {Object.keys(data).length
            ? "Actualizar datos"
            : "Crear nuevo trabajador"}
        </button>
        <button
          className="trabajadores-column1-square-btn"
          disabled={formState.isSubmitting}
          onClick={() => {
            limpiar();
            reset({});
          }}
        >
          Limpiar Formulario
        </button>

        <Worker
          activeWorker={activeWorker}
          worker={worker}
          inactiveWorker={inactiveWorker}
          onDeactivateWorker={onDeactivateWorker}
          onReactivateWorker={onReactivateWorker}
        />
      </div>
    </form>
  );
}

TrabajadoresForm.defaultProps = {
  data: {},
  action: () => {}
};
