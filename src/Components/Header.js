import React from 'react';
import './Header.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <span>📍 Colomobo,Sri Lanka</span>
        <span>✉️ pathmanadhanarigaran16gmail.com</span>
      </div>
      <div className="header-right">
        <span>📞 +94 764594961</span>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>
    </div>
  );
}

export default Header;
