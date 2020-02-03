import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../http/authService";

export function Login() {
  const { handleSubmit, register, errors } = useForm();
  const handleLogin = formData => {
    login(formData);
  };

  console.log("ERROR:", errors);
  return (
    <React.Fragment>
      <main className="centered-container">
        <h3>Please Login</h3>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control">
            <label>Email</label>
            <input
              ref={register({
                required: "The mail is mandatory",
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "The email is not valid"
                }
              })}
              name="email"
              type="text"
              placeholder="Please enter your email"
            ></input>
            {errors.email && (
              <span className="errorMessage">{errors.email.message}</span>
            )}
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              ref={register({
                required: "The password is mandatory",
                minLength: {
                  value: 6,
                  message:
                    "You should enter a password with at least 6 characters"
                }
              })}
              name="password"
              type="password"
              placeholder="Please enter your password"
            ></input>
            {errors.password && (
              <span className="errorMessage">{errors.password.message}</span>
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
