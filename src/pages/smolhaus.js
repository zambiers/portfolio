import React, { useState } from "react";
import '../base.css';
import '../Styling/projects.css';

const BASE_URL = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/images/smolhaus";

const screenshots = [
  { src: `${BASE_URL}/frontpage.png`, alt: "Itch.io Banner", category: "UI", type: "image" },
  { src: `${BASE_URL}/fishcake.png`, alt: "Concept for FishCake", category: "Setup", type: "image" },
  { src: `${BASE_URL}/indoor1.png`, alt: "Upstairs Interior", category: "Demo", type: "image" },
  { src: `${BASE_URL}/indoor2.png`, alt: "Kitchen Layout", category: "Demo", type: "image" },
  { src: `${BASE_URL}/solvingpuzzle.png`, alt: "Solving One of the Puzzles", category: "Demo", type: "image" },
  { src: `${BASE_URL}/makingfishcake.png`, alt: "How to Make a FishCake", category: "Draft", type: "image" },
  { src: `${BASE_URL}/debug.gif`, alt: "Player Interaction Demo", category: "Demo", type: "video" },
];

function Smol() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredScreenshots = screenshots.filter(
    (img) => filter === "all" || img.category === filter || (filter === "gif" && img.type === "gif")
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

            {filteredScreenshots[currentIndex].type === "gif" ? (
              <img
                src={filteredScreenshots[currentIndex].src}
                alt={filteredScreenshots[currentIndex].alt}
                className="modal-image"
              />
            ) : (
              <img
                src={filteredScreenshots[currentIndex].src}
                alt={filteredScreenshots[currentIndex].alt}
                className="modal-image"
              />
            )}

            <p className="image-caption">{filteredScreenshots[currentIndex].alt}</p>
            <button className="nav-arrow left-arrow" onClick={goPrev}>&#8592;</button>
            <button className="nav-arrow right-arrow" onClick={goNext}>&#8594;</button>
            <button className="close-button" onClick={() => setCurrentIndex(null)}>X</button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <h1>SmolHaus</h1>
      <h2>Role: Gameplay Programmer & Level Designer</h2>
      <h3>Engine: Godot (GDScript)</h3>
      <h3>Kenney Jam 2026</h3>
      <h4>Theme: Scale</h4>

      <div className="link-group">
        <h3>
          <a href="https://github.com/zambiers/UC_Scavryzaro/tree/main/UC_Scavryzaro" target="_blank" rel="noopener noreferrer" className="links">
            Github
          </a>
        </h3>
        <h3>
          <a href="https://jay-dante.itch.io/smolhaus" target="_blank" rel="noopener noreferrer" className="links">
            Itch.io
          </a>
        </h3>
      </div>

      <div className="video-container">
        <img
            src={`${BASE_URL}/frontpage.png`}
            alt="SmolHaus Banner"
            className="project-banner"
        />
        </div>

      <hr className="divider" />

<h2>My Contributions</h2>

<p>
  <strong>SmolHaus</strong> was the shortest game jam I've done so far and one of the most stressful. 
  One of the constraints we had to work with was getting puzzles to work and working with only assets given to 
  us by the hosts of the jam.
</p>

<h3>Gameplay Programming</h3>
<ul className="contributions-list">
  <li>
    One of <strong> four programmers</strong> on a six-person team.
  </li>
  <li>
    Developed gameplay systems and mechanics using
    <strong> Godot Engine in GDScript</strong>.
  </li>
</ul>

<h3>Player Interaction Systems</h3>
<ul className="contributions-list">
  <li>
    Implemented the player interaction and movement system used throughout the game.
  </li>
  <li>
    Created the puzzle within the Kitchen including the object interactions.
  </li>
</ul>

<h3>Collaboration & Source Control</h3>
<ul className="contributions-list">
  <li>
    Used <strong>GitHub</strong> for version control, alternating development
    by pushing and pulling changes between team members.
  </li>
  <li>
    Worked closely with a 3D environmental artist, audio designer, and programmers to integrate
    assets into gameplay.
  </li>
</ul>

<h3>Rapid Development</h3>
<ul className="contributions-list">
  <li>
    Created systems before start date of jam to ensure efficiency.
  </li>
  <li>
    Focused on creating a polished, professional-quality prototype within a
    short production schedule.
  </li>
</ul>

<p>
  This ended up being the most chaotic but fun game jams I've every done. And I would do it again....Be warned about the bee-movie 
  making an apperence in this creation!
</p>

{/* Photo Gallery */}
<h2>Photo Gallery of Work</h2>

<div className="filter-buttons">
  {["all", "draft", "demo", "npc", "ui", "debug", "setup", "audio", "gif"].map(
    (cat) => (
      <button key={cat} onClick={() => setFilter(cat)}>
        {cat.charAt(0).toUpperCase() + cat.slice(1)}
      </button>
    )
  )}
</div>

<div className="gallery-wrapper">
  <div className="gallery-grid">
    {filteredScreenshots.map((img, index) => (
      <div key={index} className="image-container">
        <img
          src={img.src}
          alt={img.alt}
          className="clickable-image"
          onClick={() => setCurrentIndex(index)}
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

export default Smol;