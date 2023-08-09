import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="auth">
      <div className="card">
        <div className="auth__header text-center">
          <Link className="link" href="/">
            <img src="images/icon.svg" alt="icon" />
          </Link>
          <h3>Account Login</h3>
          <p>Hello Developer, Welcome Back!</p>
        </div>

        <form action="#" className="form auth__form">
          <div className="form__field">
            <label htmlFor="formInput#text">Username: </label>
            <input
              className="input input--text"
              id="formInput#text"
              type="text"
              name="username"
              placeholder="Enter your username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="auth__actions">
            <input
              className="btn btn--sub btn--lg"
              type="submit"
              value="Log In"
            />
            <Link className="link" to="/forgetpassword">
              Forget Password?
            </Link>
          </div>
        </form>
        <div className="auth__alternative">
          <p>Don’t have an Account?</p>
          <Link className="link" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
