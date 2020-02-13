//@ts-check
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export function TrabajadoresForm({ data, action, limpiar }) {
  const { errors, register, handleSubmit, formState, reset } = useForm();

  useEffect(() => {
    reset(data);
  }, [data]);

  return (
    <form onSubmit={handleSubmit(action)}>
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
          placeholder="Please enter your name"
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
          placeholder="Please enter your email"
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
          placeholder="Please enter your password"
        ></input>
        {errors.password && (
          <span className="errorMessage">{errors.password.message}</span>
        )}
      </div>
      <div className="btn-container">
        <button
          type="submit"
          className="btn"
          disabled={formState.isSubmitting}
          onSubmit={handleSubmit(action)}
        >
          {Object.keys(data).length
            ? "Actualizar datos"
            : "Crear nuevo trabajador"}
        </button>
        <button
          className="btn"
          disabled={formState.isSubmitting}
          onClick={() => {
            limpiar();
          }}
        >
          Limpiar Formulario
        </button>
      </div>
    </form>
  );
}

TrabajadoresForm.defaultProps = {
  data: {},
  action: () => {}
};
