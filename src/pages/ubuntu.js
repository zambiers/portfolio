import React, { useState} from "react";
import '../App.css';
import '../Styling/projects.css';
import { screenshots } from "../assets/images/ubuntu/ubuntu-img-list";

// photos
import gif1 from '../assets/images/ubuntu/Demo - NPC Interaction.gif';


function Ubuntu() {


  const [currentIndex, setCurrentIndex] = useState(null);
  const [filter, setFilter] = useState("all");

    // Filtered list for display
    const filteredScreenshots = screenshots.filter(
      (img) => filter === "all" || img.category === filter
    );


  const goPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? filteredScreenshots.length - 1 : prev - 1));

  const goNext = () =>
    setCurrentIndex((prev) => (prev === filteredScreenshots.length - 1 ? 0 : prev + 1));

  return (
    <>
{/* Modal Viewer */}
      {currentIndex !== null && (
  <div className="modal-overlay" onClick={() => setCurrentIndex(null)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <img
        src={filteredScreenshots[currentIndex].src} 
        alt={filteredScreenshots[currentIndex].alt}
        className="modal-image"
      />
      <p className="image-caption">{filteredScreenshots[currentIndex].alt}</p>

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
      <h3>Theme: Perception Box </h3>
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
          src={gif1}
          className="side-image"
          alt=""
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
      <div className="filter-buttons">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("draft")}>Draft</button>
          <button onClick={() => setFilter("demo")}>Demo</button>
          <button onClick={() => setFilter("npc")}>NPC</button>
          <button onClick={() => setFilter("ui")}>UI</button>
          <button onClick={() => setFilter("debug")}>Debug</button>
          <button onClick={() => setFilter("setup")}>Setup</button>
          <button onClick={() => setFilter("audio")}>Audio</button>
      </div>
      <div className="gallery-wrapper"> 
      <div className="gallery-grid">
    {filteredScreenshots.map((img, index) => (
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
  <div className="clearfix"></div>
</div>
    </>
    
  );
}

export default Ubuntu;
