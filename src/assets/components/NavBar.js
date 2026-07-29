import React, { useState } from 'react';
import { useState } from 'react-router-dom';
import './NavBarStyles.css'; 

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="nav-button">Home</Link>
      {/* Use <a> for external link */}
      <a
        href="https://docs.google.com/document/d/1qsjwTDvZWv8OhXQaUVxOenXebu9RKbbL/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-button"
      >
        Resume
      </a>
    </div>
  );
}

export default Navbar;
