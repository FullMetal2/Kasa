import React from "react";
import { Link } from "react-router-dom";
import "./error404.scss";

function Error404() {
  return (
    <div className="error404">
      <h1>404</h1>
      <p>
        Oups! La page que <br className="br-responsive" /> vous demandez
        n'existe pas.
      </p>
      <Link to="/" className="link-error">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error404;
