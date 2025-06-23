
import React, { useState } from 'react';
import Navbar from '../assets/components/NavBar';
import headshot from '../assets/images/headshot.jpg';
import github from '../assets/images/links/github.png';
import linked from '../assets/images/links/linked.png';
import art from '../assets/images/links/art.png';
import itch from '../assets/images/links/itch.png';
import gmail from '../assets/images/links/gmail.jpg';
import '../App.css'; 

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-page-image">
        <img src={headshot} alt="Avah Afshari" className="headShot" />
      </div>
      
      <div className="home-text">
        <h1>My name is</h1>
        <h1 className='Name'> Avah Afshari.</h1>
        <h1>Welcome to my portfolio!</h1>
      </div>

      <h2>
          I made this website to keep all my projects all in one place without
          having to give multiple different links. Feel free to explore!
      </h2>

      <hr className='divider' />

    <h1 className='lower-home'>My Most Recent Project</h1>
    




      <hr className='divider' />
      <h1 className='lower-home'>Project Links</h1>
      <div className='socials'>
      <a
          href="https://github.com/zambiers" target="_blank" rel="noopener noreferrer" className="circle-link">
          <img src={github} alt="GitHub" />
      </a>

       <a
          href="https://www.linkedin.com/in/avah-afshari/" target="_blank" rel="noopener noreferrer" className="circle-link">
          <img src={linked} alt="LinkedIn" />
      </a>

      <a
          href="https://www.artstation.com/avahafshari2" target="_blank" rel="noopener noreferrer" className="circle-link">
          <img src={art} alt="ArtStation" />
      </a>

      <a
          href="https://zambiers.itch.io/" target="_blank" rel="noopener noreferrer" className="circle-link">
          <img src={itch} alt="Itch.io" />
      </a>
      </div>

      <div>
        <h1 className='lower-home'>Contact</h1>
          <div className='socials'>
          <h2> aafshari227@gmail.com or </h2>
            <a
              href="https://www.linkedin.com/in/avah-afshari/" target="_blank" rel="noopener noreferrer" className="circle-link">
              <img src={linked} alt="LinkedIn" />
            </a>

          </div>
      </div>
    
  </div>    
  );
};

export default Home;
