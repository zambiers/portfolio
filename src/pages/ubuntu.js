import React, {useState} from "react";
import Navbar from '../assets/components/NavBar';
import '../App.css';
import '../Styling/projects.css';

//photos
import screenshot1 from'../assets/images/ubuntu/setting-up-world-navi.png';
import screenshot2 from'../assets/images/ubuntu/effect-meter-zoom-in.png';
import screenshot3 from'../assets/images/ubuntu/effect-meter-zoom-out.png';
import screenshot4 from'../assets/images/ubuntu/NPC meters.png';
import screenshot5 from'../assets/images/ubuntu/internal-log.png';



function Ubuntu(){

    const [selectedImage, setSelectedImage] = useState(null);
{selectedImage && (
                <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <img src={selectedImage.src} alt={selectedImage.alt} />
                    <p className="image-caption">{selectedImage.alt}</p>
                    <button className="close-button" onClick={() => setSelectedImage(null)}>X</button>
                    </div>
                </div>
                )}
   

    return(<>
        <h1>Finding Ubuntu</h1>
        <h2>Unlikely Collaborators Game Jam 2025</h2>
        <h3>Role: Game Programmer</h3>
        <h3> Engine: Unreal Engine 5 (Blueprinting)</h3>
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
                <div className="video-container">
                        <iframe
                            width="560"
                            height="315"
                            src="https://youtu.be/11xROPm7UNs?si=_Yw8OmBgyFogHuHv"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                </div>
                <hr className='divider' />
                <h2>Oh boy, was this a project!</h2>
                <div className="text-image-container">
                    <img src={screenshot1} alt="Setting up World Navi" className="side-image" />
                 <div className="text-block">
                    <p>
                        Yes, indeed, this is a 2D game made in Unreal Engine. 
                            I got to work with some amazing people for this project and this game ended up being the 
                            first game that is polished and professional.  I was one of two programmers (out of 5 people on the team). Because this was for the Unlikey Collaborator's
                            Game Jame 2025, teams were only alloted around 2 weeks for development. Our team ended up taking only one week. I know working on this,
                            I ended up working on this while in the middle of midterms, which was a nice break from doing Assembly homework.
                        </p>
                
                     <p>
                    Before doing this game, I did take a class called "CSS 385 - Intro into Game Development", where I made a visual novel in Unreal Engine. The nice part is how I was able to 
                    take some of those blueprints, and set up the environment for both me and Ryan, the other programmer. This did include initializing the visual novel letter-printing, body interaction, and 
                    other parts. I say "other parts" since me and Ryan went back and forth between coding. Having GitHub helped us a lot since everyone was in a different state.
                   </p>
                </div>
                </div>
                
                <p>
                    At the beginning, I ended up starting the GitHub repo, and project while asking Ryan how we wanted to split up the work. What we ended up 
                    doing was having one person do some work, push to main branch, then the other person would pull and 

                </p>

                <p> 
                 At the end, we ended up creating one of my favorite game that I've ever made that I add to this portfolio. 
                </p>

            <h2> Photo Gallery of Work</h2>
                       <div className="scroll-gallery">
                {[screenshot1, screenshot2, screenshot3, screenshot4, screenshot5].map((img, index) => (
                    <img
                    key={index}
                    src={img}
                    alt={`Screenshot ${index + 1}`}
                    onClick={() => setSelectedImage({ src: img, alt: `Screenshot ${index + 1}` })}
                    className="clickable-image"
                    />
                ))}
                </div>

                 
    </>);//end of return
}

export default Ubuntu;