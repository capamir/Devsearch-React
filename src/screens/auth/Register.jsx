import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="auth">
      <div className="card">
        <div className="auth__header text-center">
          <Link to="/" className="link">
            <img src="images/icon.svg" alt="icon" />
          </Link>
          <h3>Account SignUp</h3>
          <p>Create a new developer account</p>
        </div>

        <form action="#" className="form auth__form">
          <div className="form__field">
            <label htmlFor="formInput#text">Full Name: </label>
            <input
              className="input input--text"
              id="formInput#text"
              type="text"
              name="text"
              placeholder="e.g. Dennis Ivanov"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form__field">
            <label htmlFor="formInput#email">Email Address: </label>
            <input
              className="input input--email"
              id="formInput#email"
              type="email"
              name="email"
              placeholder="e.g. user@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form__field">
            <label htmlFor="formInput#password">Password: </label>
            <input
              className="input input--password"
              id="formInput#passowrd"
              type="password"
              name="password"
              placeholder="••••••••"
              value={passowrd}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form__field">
            <label htmlFor="formInput#confirm-password">
              Confirm Password:{" "}
            </label>
            <input
              className="input input--password"
              id="formInput#confirm-passowrd"
              type="password"
              name="confirm-password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="auth__actions">
            <input
              className="btn btn--sub btn--lg"
              type="submit"
              value="Sign  In"
            />
          </div>
        </form>
        <div className="auth__alternative">
          <p>Already have an Account?</p>
          <Link className="link" to="/login">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
