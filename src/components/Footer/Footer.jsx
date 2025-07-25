import React from 'react';
import './footer.scss';
import logo from '../../../assets/logo/LOGO@2x.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={logo} alt="Kasa" className="footer-logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;