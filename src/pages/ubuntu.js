import React from "react";
import Navbar from '../assets/components/NavBar';
import '../App.css';
import '../Styling/projects.css';


function Ubuntu(){
    return(<>
        <h1>Finding Ubuntu</h1>
        <h2>Unlikely Collaborators Game Jam 2025</h2>
        <h1 className='links-section'></h1>
                  <div className="link-group">
                    <h3>
                        <a 
                        href="https://github.com/zambiers/UC_Scavryzaro/tree/main/UC_Scavryzaro" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="links"
                        >
                        Github
                        </a>
                    </h3>
                    <h3>
                        <a 
                        href="https://roshellepixelle.itch.io/finding-ubuntu" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="links"
                        >
                        Itch.io 
                        </a>
                    </h3>
                    </div>       
    </>);
}

export default Ubuntu;