import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="auth">
      <div className="card">
        <div className="auth__header text-center">
          <Link to="/">
            <img src="images/icon.svg" alt="icon" />
          </Link>
          <h3>Forget Password?</h3>
          <p>Reset password by entering the email address</p>
        </div>

        <form action="#" className="form auth__form">
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

          <div className="auth__actions">
            <input
              className="btn btn--sub btn--lg"
              type="submit"
              value="Send Instructions"
            />
            <Link to="/login">Login</Link>
          </div>
        </form>
        <div className="auth__alternative">
          <p>Don’t have an Account?</p>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
