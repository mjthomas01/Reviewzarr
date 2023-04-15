import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h1>Review Analyzer</h1>
      </div>
      <div className="navbar__right">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Analyze</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
