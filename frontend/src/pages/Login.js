import React from "react";
import { Link } from "react-router-dom";
import useForm from "react-hook-form";

export function Login() {
  return (
    <React.Fragment>
      <main className="centered-container">
        <h3>Please Login</h3>
        <form>
          <div className="form-control">
            <label>Email</label>
            <input type="email" placeholder="Please enter your email"></input>
            <span className="errorMessage"></span>
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              placeholder="Please enter your password"
            ></input>
            <span className="errorMessage"></span>
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
