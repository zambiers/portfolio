import React, { useState } from "react";
import '../base.css';
import '../Styling/projects.css';

const BASE_URL = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/images/oil";

const screenshots = [
  { src: `${BASE_URL}/OpeningScene.png`, alt: "Opening Scene", category: "layout", type: "image" },
  { src: `${BASE_URL}/ESOpeningScene.png`, alt: "Opening Scene Block Code", category: "code", type: "image" },
  { src: `${BASE_URL}/bubbleCar.png`, alt: "Level 2 - Bubble Car", category: "demo screenshots", type: "image" },
  { src: `${BASE_URL}/openingLevel.png`, alt: "Level 1 - Intro", category: "demo screenshots", type: "image" },
  { src: `${BASE_URL}/frontPage.png`, alt: "Front Page", category: "demo screenshots", type: "image" },
  { src: `${BASE_URL}/gameplayOrganization.png`, alt: "Main Gameplay Organization", category: "code", type: "image" },
  { src: `${BASE_URL}/bubbleCarMechanics.png`, alt: "Bubble Car Mechanics", category: "code", type: "image" },
  { src: `${BASE_URL}/bossLayout.png`, alt: "Boss Battle Layout", category: "layout", type: "image" },
  { src: `${BASE_URL}/bossBattle.gif`, alt: "Final Level - Boss Battle", category: "demo screenshots", type: "gif" },
];

function Oil() {
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
      <h1>Avah's Oil Spill</h1>
      <h2>Role: Project Manager & Gameplay Programmer</h2>
      <h3>Engine: Construct 3</h3>
      <h4>Girls Make Games 2023</h4>

      <div className="link-group">
        <h3>
          <a
            href="https://itch.io/queue/c/3586204/2023-girls-make-games-summer-camp-games?game_id=2224225&password="
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            Itch.io - Girls Make Games
          </a>
        </h3>
      </div>

      <div className="video-container">
        <iframe
          width="725"
          height="500"
          src="https://www.youtube.com/embed/Z1U9ohE4DMA?si=Nyy9XBnNp8f_OHVE"
          title="Avah's Oil Spill Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <hr className="divider" />

<h2>My Contributions</h2>

<p>
  <strong>Avah's Oil Spill</strong> was created during my first summer as a
  Girls Make Games Fellow, where I mentored a team of young developers through
  the entire game development process. While the campers created much of the
  game's art, music, and level ideas, I guided them through programming,
  debugging, and turning their ideas into a finished game.
</p>

<h3>Mentorship & Teaching</h3>
<ul className="contributions-list">
  <li>
    Mentored a team of campers throughout the complete game development
    process, helping them learn programming, design, and collaboration.
  </li>
  <li>
    Guided students through debugging and implementing gameplay features while
    encouraging them to solve problems independently.
  </li>
  <li>
    Created a supportive environment where every camper could contribute to the
    final project regardless of experience level.
  </li>
</ul>

<h3>Gameplay Programming</h3>
<ul className="contributions-list">
  <li>
    Implemented the more technically challenging gameplay systems that were
    beyond the campers' experience.
  </li>
  <li>
    Assisted with integrating artwork, animations, and audio into the game.
  </li>
  <li>
    Helped polish gameplay and resolve technical issues before submission.
  </li>
</ul>

<h3>Project Organization</h3>
<ul className="contributions-list">
  <li>
    Introduced the team to a <strong>Kanban workflow</strong> to organize tasks
    and track progress throughout development.
  </li>
  <li>
    Coordinated work between programmers, artists, and designers so everyone
    understood what needed to be completed.
  </li>
  <li>
    Helped keep the project on schedule while balancing learning and
    development.
  </li>
</ul>

<h3>Level Design & Collaboration</h3>
<ul className="contributions-list">
  <li>
    Designed several of the game's level layouts while encouraging campers to
    create and iterate on their own ideas.
  </li>
  <li>
    Worked alongside campers to refine gameplay, pacing, and level flow.
  </li>
  <li>
    Celebrated camper creativity by helping bring their ideas into the finished
    game.
  </li>
</ul>

<p>
  Although this project focused on teaching rather than building every feature
  myself, it became one of the most rewarding experiences I've had. Watching
  the campers gain confidence, create something they were proud of, and even
  insist on naming the main character after me made this project unforgettable.
</p>


      {/* Photo Gallery */}
      <h2>Photo Gallery of Work</h2>
      <div className="filter-buttons">
        {["all", "code", "layout", "demo screenshots", "gif"].map((cat) => (
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

export default Oil;