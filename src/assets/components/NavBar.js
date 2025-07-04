import React, { useState, useRef} from 'react';
import { Link } from "react-router-dom";
import './NavBarStyles.css'; 

//Games
import Ubuntu from '../../pages/ubuntu';
import Minutes from '../../pages/minutes';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <Link to="/" className="nav-button">Home</Link>

      <div className="nav-dropdown">
        <button className={`nav-button dropdown-toggle ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
          Projects <span className="arrow">◀</span>
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <Link to="/Ubuntu" className="dropdown-item">Finding Ubuntu</Link>
            <Link to="/Minutes" className="dropdown-item">Five More Minutes...</Link>
            <Link to="/games" className="dropdown-item">Games</Link>
          </div>
        )}
      </div>

      <Link to="/Contacts" className="nav-button">Contacts</Link>
    </div>
  );
}

export default Navbar;

