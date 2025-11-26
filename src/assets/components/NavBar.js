import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './NavBarStyles.css'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => setIsOpen(false), [location]);

  return (
    <div className="navbar">
      <Link to="/" className="nav-button">Home</Link>
      <Link to="/About" className="nav-button">About</Link>

      {/* Use <a> for external link */}
      <a
        href="https://docs.google.com/document/d/1qsjwTDvZWv8OhXQaUVxOenXebu9RKbbL/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-button"
      >
        Resume
      </a>

      <div 
        className="nav-dropdown"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className={`nav-button dropdown-toggle ${isOpen ? 'open' : ''}`}>
          Projects <span className="arrow">◀</span>
        </button>

        {isOpen && (
          <div className="dropdown-menu">
            <Link to="/Ubuntu" className="dropdown-item">Finding Ubuntu</Link>
            <Link to="/Minutes" className="dropdown-item">Five More Minutes...</Link>
            <Link to="/Gnome" className="dropdown-item">Whack-A-Gnome</Link>
            <Link to="/Escapeza" className="dropdown-item">La Escapeza</Link>
            <Link to="/Oil" className="dropdown-item">Avah's Oil Spill</Link>
          </div>
        )}
      </div>

      <Link to="/Contacts" className="nav-button">Contacts</Link>
    </div>
  );
}

export default Navbar;
