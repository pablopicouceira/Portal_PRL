import React from "react";
import { Link } from "react-router-dom";
import { useForm, ErrorMessage } from "react-hook-form";

export function Login() {
  const { handleSubmit, register, errors } = useForm();
  const login = data => console.log(data);
  return (
    <React.Fragment>
      <main className="centered-container">
        <h3>Please Login</h3>
        <form onSubmit={handleSubmit(login)}>
          <div className="form-control">
            <label>Email</label>
            <input
              ref={register({
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
              name="email"
              type="email"
              placeholder="Please enter your email"
            ></input>
            {errors.email && (
              <span className="errorMessage">The email is not valid</span>
            )}
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              ref={register({
                required: true,
                minLength: 6
              })}
              name="password"
              type="password"
              placeholder="Please enter your password"
            ></input>
            {errors.password && (
              <span className="errorMessage">The password is not valid</span>
            )}
          </div>
          <div className="button-container">
            <button type="submit" className="btn">
              Login
            </button>
            <Link to="/portada">"Don't have an account?"</Link>
          </div>
        </form>
      </main>
    </React.Fragment>
  );
}
