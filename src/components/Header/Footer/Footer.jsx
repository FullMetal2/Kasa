import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src="./public/logo/LOGO@2x.png" alt="Kasa" className="footer-logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;