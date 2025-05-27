import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">SkillGro</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Course">Courses</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login" className="btn-login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
