import React, { useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import './NavBarStyles.css'; 

//Games

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleDropdownItemClick = () => setIsOpen(false);
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);//when not hovering, will close dropdown
  const location = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);


    return (
    <div className="navbar">
      <Link to="/" className="nav-button">Home</Link>

      <div 
        className="nav-dropdown" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <button 
          className={`nav-button dropdown-toggle ${isOpen ? 'open' : ''}`}
          aria-expanded={isOpen}
          aria-haspopup="true"
          type="button"
        >
          Projects <span className="arrow">◀</span>
        </button>

        {isOpen && (
          <div className="dropdown-menu">
            <Link to="/Ubuntu" className="dropdown-item">Finding Ubuntu</Link>
            <Link to="/Minutes" className="dropdown-item">Five More Minutes...</Link>
            <Link to="/Oil" className="dropdown-item">Avah's Oil Spill</Link>
            <Link to="/Escapeza" className="dropdown-item">La Escapeza</Link>
            <Link to="/Gnome" className="dropdown-item">Whack-A-Gnome</Link>
            <Link to="/games" className="dropdown-item">Games</Link>
          </div>
        )}
      </div>

      <Link to="/Contacts" className="nav-button">Contacts</Link>
    </div>
  );
}

export default Navbar;

