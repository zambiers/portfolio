import React, { useState } from "react";
import '../base.css';
import '../Styling/projects.css';

const BASE_URL = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/images/ubuntu";

const screenshots = [
  { src: `${BASE_URL}/Rough Draft of Game.png`, alt: "Rough Draft of the Game and UI", category: "draft", type: "image" },
  { src: `${BASE_URL}/Learning information.gif`, alt: "Reading J. Doe's Case File", category: "demo", type: "gif" },
  { src: `${BASE_URL}/Hovering over text.gif`, alt: "Hovering Text Over Clues", category: "demo", type: "gif" },
  { src: `${BASE_URL}/Early Stages of NPC Interaction.png`, alt: "Early Stages of NPC Interactions", category: "draft", type: "image" },
  { src: `${BASE_URL}/Talking to NPC - Activist.png`, alt: "Talking to NPC - The Activist", category: "npc", type: "image" },
  { src: `${BASE_URL}/Demo - NPC Interaction.gif`, alt: "NPC Interaction Test Run", category: "demo", type: "gif" },
  { src: `${BASE_URL}/effect-meter-zoom-in.png`, alt: "Persuasion Meter - Zoomed In", category: "ui", type: "image" },
  { src: `${BASE_URL}/effect-meter-zoom-out.png`, alt: "Persuasion Meter - Zoomed Out", category: "ui", type: "image" },
  { src: `${BASE_URL}/NPC meters.png`, alt: "Calling NPC Meters", category: "npc", type: "image" },
  { src: `${BASE_URL}/internal-log.png`, alt: "Debug Log During Test Run", category: "debug", type: "image" },
  { src: `${BASE_URL}/setting-up-world-navi.png`, alt: "Setting Up World Navigation", category: "setup", type: "image" },
  { src: `${BASE_URL}/Putting stuff on screen.png`, alt: "Getting Text from Datatables", category: "setup", type: "image" },
  { src: `${BASE_URL}/Tool for sound effect of dialouge.png`, alt: "Dialogue Sound Effect", category: "audio", type: "image" },
];

function Ubuntu() {
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
      <h1>Finding Ubuntu</h1>
      <h2>Role: Gameplay Programmer</h2>
      <h3>Engine: Unreal Engine 5 (Blueprinting)</h3>
      <h3>Unlikely Collaborators Game Jam 2025</h3>
      <h4>Theme: Perception Box</h4>

      <div className="link-group">
        <h3>
          <a href="https://github.com/zambiers/UC_Scavryzaro/tree/main/UC_Scavryzaro" target="_blank" rel="noopener noreferrer" className="links">
            Github
          </a>
        </h3>
        <h3>
          <a href="https://roshellepixelle.itch.io/finding-ubuntu" target="_blank" rel="noopener noreferrer" className="links">
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

<h2>My Contributions</h2>

<p>
  <strong>Finding Ubuntu</strong> was my first polished Unreal Engine game jam
  project and the first time I worked on a remotely distributed development
  team. Although the jam lasted two weeks, our team completed the game in
  roughly one week while balancing schoolwork and midterms. It became one of my
  favorite projects because it showed how much I had grown as a gameplay
  programmer.
</p>

<h3>Gameplay Programming</h3>
<ul className="contributions-list">
  <li>
    One of <strong>two gameplay programmers</strong> on a five-person team.
  </li>
  <li>
    Developed gameplay systems and mechanics using
    <strong> Unreal Engine Blueprints.</strong>
  </li>
  <li>
    Reused and expanded systems from a previous Unreal Engine project to speed
    up development without sacrificing quality.
  </li>
</ul>

<h3>Dialogue & Interaction Systems</h3>
<ul className="contributions-list">
  <li>
    Implemented the <strong>letter-printing dialogue system</strong> used
    throughout the game.
  </li>
  <li>
    Created NPC interaction mechanics and player interaction logic.
  </li>
  <li>
    Connected gameplay events with dialogue to improve player immersion.
  </li>
</ul>

<h3>Collaboration & Source Control</h3>
<ul className="contributions-list">
  <li>
    Collaborated remotely with another gameplay programmer located in a
    different state.
  </li>
  <li>
    Used <strong>GitHub</strong> for version control, alternating development
    by pushing and pulling changes between team members.
  </li>
  <li>
    Worked closely with artists, designers, and audio teammates to integrate
    assets into gameplay.
  </li>
</ul>

<h3>Rapid Development</h3>
<ul className="contributions-list">
  <li>
    Helped complete the game in approximately
    <strong> one week</strong>, well ahead of the game jam deadline.
  </li>
  <li>
    Balanced development alongside university coursework and midterm exams.
  </li>
  <li>
    Focused on creating a polished, professional-quality prototype within a
    short production schedule.
  </li>
</ul>

<p>
  Finding Ubuntu was an important milestone for me. It strengthened my Unreal
  Engine workflow, improved my experience collaborating through GitHub, and
  taught me how to deliver polished gameplay under tight deadlines.
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

export default Ubuntu;