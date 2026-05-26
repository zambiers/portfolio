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
      {/* Use <a> for external link */}
      <a
        href="https://docs.google.com/document/d/1qsjwTDvZWv8OhXQaUVxOenXebu9RKbbL/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-button"
      >
        Resume
      </a>

      <Link to="/Contacts" className="nav-button">Contacts</Link>
    </div>
  );
}

export default Navbar;
