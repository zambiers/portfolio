import React from "react";
import { Link } from "react-router-dom";
import './NavBarStyles.css'; // Make sure to style your buttons here

function Navbar(){
   return( 
   <div className="navbar">
      <Link to="/" className="nav-button">Home</Link>
      <Link to="/page1" className="nav-button">About me</Link>
       <Link to="/page2" className="nav-button">My Work</Link>
   </div>
   );
}

export default Navbar;