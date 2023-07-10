import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <header className="header">
      <div className="container container--narrow">
        <a href="/" className="header__logo">
          <img src="images/logo.svg" alt="DevSearch Logo" />
        </a>
        <nav className="header__nav">
          <input type="checkbox" id="responsive-menu" />
          <label htmlFor="responsive-menu" className="toggle-menu">
            <span>Menu</span>
            <div className="toggle-menu__lines"></div>
          </label>
          <ul className="header__menu">
            <li className="header__menuItem">
              <a href="home.html">Developers</a>
            </li>
            <li className="header__menuItem">
              <a href="projects.html">Projects</a>
            </li>
            <li className="header__menuItem">
              <a href="inbox.html">Inbox</a>
            </li>
            <li className="header__menuItem">
              <a href="account.html">My Account</a>
            </li>
            <li className="header__menuItem">
              <a href="login.html" className="btn btn--sub">
                Login/Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
