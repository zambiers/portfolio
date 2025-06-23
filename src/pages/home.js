
import React, { useState } from 'react';
import Navbar from '../assets/components/NavBar';
import headShot from '../assets/images/headShot.png';
import '../App.css'; 

function Home() {
  return (<>
  <div className='home-page-image'>
      <img src = {headShot}  className= "headShot" />
   </div>
  <h1>
    My name is Avah Afshari, and this is my website.
  </h1>
  <h2>
    A little about me: 
  </h2>
  <h3>
    I made this website to keep all my projects all in one place without having to give multiple different
    links. 
  </h3>
  

  <div>
    <h1>
      My most recent projects
    </h1>
  </div>
  </>);
}

export default Home;
