import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <header className="header">
      <div className="container container--narrow">
        <Link to="/" className="header__logo">
          <img src="images/logo.svg" alt="DevSearch Logo" />
        </Link>
        <nav className="header__nav">
          <input type="checkbox" id="responsive-menu" />
          <label htmlFor="responsive-menu" className="toggle-menu">
            <span>Menu</span>
            <div className="toggle-menu__lines"></div>
          </label>
          <ul className="header__menu">
            <li className="header__menuItem">
              <Link to="/profile" className="link">
                Developers
              </Link>
            </li>
            <li className="header__menuItem">
              <Link to="projects.html" className="link">
                Projects
              </Link>
            </li>
            <li className="header__menuItem">
              <Link to="inbox.html" className="link">
                Inbox
              </Link>
            </li>
            <li className="header__menuItem">
              <Link to="account.html" className="link">
                My Account
              </Link>
            </li>
            <li className="header__menuItem">
              <Link to="/login" className="btn btn--sub link">
                Login/Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
