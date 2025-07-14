import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src="/public/LOGO@2x.png" alt="Kasa" className="header-logo" />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">À Propos</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

