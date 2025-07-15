import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src="./public/logo/LOGO.png" alt="Kasa" className="header-logo" />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">À Propos</Link>
          <Link to="/error404">E</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

