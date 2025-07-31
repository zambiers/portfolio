import React from "react";
import Navbar from '../assets/components/NavBar';

import github from '../assets/images/links/github.png';
import linked from '../assets/images/links/linked.png';
import itch from '../assets/images/links/itch.png';

import '../App.css';
import '../Styling/contact.css'; 

function Contact(){
    return(<>
    <h1 className='lower-home'>Project Links in Socials</h1>
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
              href="https://zambiers.itch.io/" target="_blank" rel="noopener noreferrer" className="circle-link">
              <img src={itch} alt="Itch.io" />
          </a>
          </div>
    
          <div>
            <h1 className='lower-home'>Contact</h1>
              <div className='socials'>
                <a
                  href="https://www.linkedin.com/in/avah-afshari/" target="_blank" rel="noopener noreferrer" className="circle-link">
                  <img src={linked} alt="LinkedIn" />
                </a>
    
              </div>
          </div>
          </>
    
    );
}

export default Contact;