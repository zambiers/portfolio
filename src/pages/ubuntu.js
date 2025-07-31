import React, { useState, useRef, useEffect } from "react";
import '../App.css';
import '../Styling/projects.css';

// photos
import screenshot1 from '../assets/images/ubuntu/setting-up-world-navi.png';
import screenshot2 from '../assets/images/ubuntu/effect-meter-zoom-in.png';
import screenshot3 from '../assets/images/ubuntu/effect-meter-zoom-out.png';
import screenshot4 from '../assets/images/ubuntu/NPC meters.png';
import screenshot5 from '../assets/images/ubuntu/internal-log.png';
import ss1 from '../assets/images/ubuntu/Early Stages of NPC Interaction.png';
import ss2 from '../assets/images/ubuntu/Putting stuff on screen.png';
import ss3 from '../assets/images/ubuntu/Rough Draft of Game.png';
import ss4 from '../assets/images/ubuntu/Talking to NPC - Activist.png';
import ss5 from '../assets/images/ubuntu/Tool for sound effect of dialouge.png';

function Ubuntu() {
  const screenshots = [
    { src: screenshot1, alt: "Setting up world navigation in Widget editor on Unreal" },
    { src: screenshot2, alt: "Persuasion meter - Zoomed In" },
    { src: screenshot3, alt: "Persuasion meter - Zoomed Out" },
    { src: screenshot4, alt: "Calling NPC meters" },
    { src: screenshot5, alt: "Debug log during test run" },
    { src: ss1, alt: "Early Stages of NPC Interactions" },
    { src: ss2, alt: "Getting text from Data tables to show on screen" },
    { src: ss3, alt: "Rough Draft of the Game and UI" },
    { src: ss4, alt: "Talking to NPC - The Activist" },
    { src: ss5, alt: "Dialogue sound effect" },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  // Modal navigation
  const goPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));

  const goNext = () =>
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));

  return (
    <>
      {/* Modal Viewer */}
      {currentIndex !== null && (
        <div className="modal-overlay" onClick={() => setCurrentIndex(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={screenshots[currentIndex].src}
              alt={screenshots[currentIndex].alt}
              className="modal-image"
            />
            <p className="image-caption">{screenshots[currentIndex].alt}</p>

            <button className="nav-arrow left-arrow" onClick={goPrev}>
              &#8592;
            </button>
            <button className="nav-arrow right-arrow" onClick={goNext}>
              &#8594;
            </button>
            <button className="close-button" onClick={() => setCurrentIndex(null)}>X</button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <h1>Finding Ubuntu</h1>
      <h2>Unlikely Collaborators Game Jam 2025</h2>
      <h3>Role: Game Programmer</h3>
      <h3>Engine: Unreal Engine 5 (Blueprinting)</h3>

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
          width="725"
          height="500"
          src="https://www.youtube.com/embed/11xROPm7UNs"
          title="Finding Ubuntu Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <hr className="divider" />
      <h2>Oh boy, was this a project!</h2>
      <div className="text-image-container">
        <img
          src={screenshot1}
          alt="Setting up World Navi"
          className="side-image"
        />
        <div className="text-block">
          <p>
            Yes, indeed, this is a 2D game made in Unreal Engine. I got to work
            with some amazing people for this project, and this game ended up
            being the first polished and professional one. I was one of two
            programmers (out of 5 on the team). Because this was for the Unlikely
            Collaborator's Game Jam 2025, teams were only allotted around 2
            weeks.
          </p>
          <p>
            Our team finished in one week. I worked on it while also dealing with
            midterms, which was a welcome break from Assembly homework.
          </p>
        </div>
      </div>

      <p>
        Before this, I took CSS 385 - Intro into Game Development, where I made a
        visual novel in Unreal. I reused some blueprints to set up the project
        structure, including the letter-printing system and body interactions.
      </p>
      <p>
        Ryan and I alternated tasks, using GitHub to share work since we were in
        different states. One would push to main, the other would pull and
        continue.
      </p>
      <p>
        In the end, we created one of my favorite games and added it to this
        portfolio.
      </p>

      <h2>Photo Gallery of Work</h2>
      <div className="gallery-wrapper">
  <div className="scroll-gallery">
    {screenshots.map((img, index) => (
      <div key={index} className="image-container">
        <img
          src={img.src}
          alt={img.alt}
          onClick={() => setCurrentIndex(index)}
          className="clickable-image"
        />
        <p className="image-caption">{img.alt}</p>
      </div>
    ))}
  </div>
</div>
    </>
    
  );
}

export default Ubuntu;
