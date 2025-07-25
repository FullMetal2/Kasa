import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/LOGO.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Kasa" className="header-logo" />
        <nav className="nav-link">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            A propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
