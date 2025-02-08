import React from 'react';
import { Link } from 'react-router-dom';  
import "./styles/navbar.css";

function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/Transparent_Logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Help</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;

