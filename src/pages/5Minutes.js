import React, { useState } from "react";
import '../base.css';
import '../Styling/projects.css';

const BASE_URL = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/images/minutes";

const gif1 = `${BASE_URL}/Sheep moving.gif`;

const screenshots = [
  { src: `${BASE_URL}/start screen.png`, alt: "Start Screen Set Up", category: "setup", type: "image" },
  { src: `${BASE_URL}/79Z_No.png`, alt: "Starting Menu", category: "ui", type: "image" },
  { src: `${BASE_URL}/HMdnWM.png`, alt: "Choosing to Hit Snooze or Get Up", category: "ui", type: "image" },
  { src: `${BASE_URL}/Five More Minutes.gif`, alt: "Gameplay - Gif", category: "demo", type: "gif" },
  { src: `${BASE_URL}/Sheep moving.gif`, alt: "Gameplay - Sheep Moving", category: "demo", type: "gif" },
  { src: `${BASE_URL}/UI playthrough.gif`, alt: "UI Menus Walkthrough", category: "demo", type: "gif" },
  { src: `${BASE_URL}/Credit UI.png`, alt: "Credits UI Set Up", category: "setup", type: "image" },
];

function Minutes() {
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
            <img
              src={filteredScreenshots[currentIndex].src}
              alt={filteredScreenshots[currentIndex].alt}
              className="modal-image"
            />
            <p className="image-caption">{filteredScreenshots[currentIndex].alt}</p>
            <button className="nav-arrow left-arrow" onClick={goPrev}>&#8592;</button>
            <button className="nav-arrow right-arrow" onClick={goNext}>&#8594;</button>
            <button className="close-button" onClick={() => setCurrentIndex(null)}>X</button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <h1>Five More Minutes...</h1>
      <h2>Role: UI/UX Programmer and Designer</h2>
      <h3>Engine: Godot (GDScript)</h3>
      <h3>University of Washington Tri-Campus Game Jam 2025</h3>
      <h4>Theme: Delay the Inevitable</h4>

      <div className="link-group">
        <h3>
          <a href="https://github.com/State0fFlux/Five-More-Minutes" target="_blank" rel="noopener noreferrer" className="links">
            Github
          </a>
        </h3>
        <h3>
          <a href="https://state0fflux.itch.io/five-more-minutes" target="_blank" rel="noopener noreferrer" className="links">
            Itch.io
          </a>
        </h3>
      </div>

      <div className="video-container">
        <iframe
          width="725"
          height="500"
          src="https://www.youtube.com/embed/qbIMvv6MgM0?si=zvP1pWCuyVzclhNt"
          title="Five More Minutes Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <hr className="divider" />

<h2>My Contributions</h2>

<p>
  <strong>Five More Minutes...</strong> was my first project using
  <strong> Godot</strong> and my first time collaborating through GitHub on a
  remote game jam team. Built over the course of one week, the game explores
  the struggle of waking up and the temptation to stay asleep just a little
  longer. Much of the concept was inspired by my own experiences balancing
  ADHD, insomnia, and the challenge of getting enough rest during college.
</p>

<h3>UI & Menu Development</h3>
<ul className="contributions-list">
  <li>
    Designed and implemented the game's
    <strong> main menu, pause menu, and user interface</strong> in Godot.
  </li>
  <li>
    Focused on creating a clean presentation that matched the game's relaxing
    dream-like atmosphere.
  </li>
  <li>
    Integrated UI elements with gameplay systems and scene transitions.
  </li>
</ul>

<h3>Art Direction & Asset Integration</h3>
<ul className="contributions-list">
  <li>
    Sourced and integrated many of the visual assets used throughout the game.
  </li>
  <li>
    Helped establish the overall visual style while ensuring assets worked
    consistently together.
  </li>
  <li>
    Assisted with importing, organizing, and testing assets inside Godot.
  </li>
</ul>

<h3>Remote Collaboration</h3>
<ul className="contributions-list">
  <li>
    Collaborated remotely with a teammate attending the
    <strong> University of Washington Seattle</strong> while developing from
    the Bothell campus.
  </li>
  <li>
    Used <strong>GitHub</strong> for version control and coordinated daily
    changes through Discord.
  </li>
  <li>
    Balanced development around classes during a one-week game jam schedule.
  </li>
</ul>

<h3>Game Design</h3>
<ul className="contributions-list">
  <li>
    Helped develop the core mechanic where differently colored sheep represent
    different amounts of sleep.
  </li>
  <li>
    Designed gameplay around managing sleep before an important exam, balancing
    risk and strategy.
  </li>
  <li>
    Contributed to transforming a personal experience into a playful,
    accessible gameplay concept.
  </li>
</ul>

<p>
  Five More Minutes... gave me hands-on experience learning Godot while working
  remotely with a teammate under a tight deadline. It also showed me how
  personal experiences can become engaging game mechanics, making this one of
  the most meaningful projects I've worked on.
</p>

{/* Photo Gallery */}
<h2>Photo Gallery of Work</h2>
      {/* Photo Gallery */}
      <h2>Photo Gallery of Work</h2>
      <div className="filter-buttons">
        {["all", "demo", "ui", "setup", "gif"].map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
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

export default Minutes;