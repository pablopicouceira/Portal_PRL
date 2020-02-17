import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../http/authService";
import { useAuth } from "../context/auth-context";
import { Header } from "../components/Header";

import "../css/Login.css";

export function Login() {
  // const [backendErrorMessage, setBackendErrorMessage] = useState("");

  const {
    handleSubmit,
    register,
    errors,
    watch,
    formState,
    setError,
    setValue
  } = useForm();

  const history = useHistory();
  const { setIsAuthenticated, setCurrentUser } = useAuth();

  const handleLogin = formData => {
    login(formData)
      .then(response => {
        //localStorage.setItem("currentUser", JSON.stringify(response.data));
        setIsAuthenticated(true);
        setCurrentUser(response.data);

        history.push("/panel");
      })
      .catch(error => {
        // setBackendErrorMessage("The credentials are not valid");
        setValue("password", "");
        setError("password", "credentials", "Problem with the credentials");
      });
  };

  // console.log("ERROR:", errors);
  return (
    <React.Fragment>
      <Header />
      <main className="centered-container">
        <h3>Please Login</h3>

        {/* {backendErrorMessage && !formState.isValid && (
          <p className="alert">
            {backendErrorMessage}
            <span onClick={() => setBackendErrorMessage("")}>close</span>
          </p>
        )} */}

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
            <button
              type="submit"
              className="btn"
              disabled={formState.isSubmitting}
            >
              Login
            </button>
            <Link to="/portada">"Don't have an account?"</Link>
          </div>
        </form>
      </main>
    </React.Fragment>
  );
}
