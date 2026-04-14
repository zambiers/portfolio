import React, { useState } from "react";
import '../App.css';
import '../Styling/projects.css';

const BASE_URL = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/images/aster";

const gif1 = `${BASE_URL}/transitionWorking.mp4`;

const screenshots = [
  { src: `${BASE_URL}/conceptDonebyArtist.png`, alt: "Concepting Done by Artist", category: "draft", type: "image" },
  { src: `${BASE_URL}/long-talk-box.png`, alt: "A Little Oppsie Creating Importing Text", category: "debug", type: "image" },
  { src: `${BASE_URL}/sampleGamePlay.png`, alt: "Sample Gameplay", category: "demo", type: "image" },
  { src: `${BASE_URL}/sampleTalking-Aster.mp4`, alt: "Sample Talking", category: "demo", type: "video" },
  { src: `${BASE_URL}/settingUpGrid.png`, alt: "Setting up Grid", category: "debug", type: "image" },
  { src: `${BASE_URL}/solutionFound.png`, alt: "Solution Found", category: "demo", type: "image" },
  { src: `${BASE_URL}/testingTalking-Aster.mp4`, alt: "Testing Talking", category: "draft", type: "video" },
  { src: `${BASE_URL}/titleCard.png`, alt: "Title Card", category: "draft", type: "image" },
  { src: `${BASE_URL}/transitionWorking.mp4`, alt: "Scene Transition Working", category: "debug", type: "video" },
];

function Aster() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredScreenshots = screenshots.filter(
    (img) => filter === "all" || img.category === filter || (filter === "video" && img.type === "video")
  );

  const goPrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? filteredScreenshots.length - 1 : prev - 1
    );

  const goNext = () =>
    setCurrentIndex((prev) =>
      prev === filteredScreenshots.length - 1 ? 0 : prev + 1
    );

  return (
    <>
      {/* Modal Viewer */}
      {currentIndex !== null && (
        <div className="modal-overlay" onClick={() => setCurrentIndex(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            {filteredScreenshots[currentIndex].type === "video" ? (
              <video
                src={filteredScreenshots[currentIndex].src}
                className="modal-image"
                autoPlay
                loop
                muted
                playsInline
                controls
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
      <h1>Aster</h1>
      <h2>Unlikely Collaborators Game Jam 2026</h2>
      <h3>Theme: Consciousness and Identity Through Awe and Wonder — Make Awe Playable!</h3>
      <h3>Role: Team Lead, Game Programmer</h3>
      <h3>Engine: Unity (C#)</h3>

      <div className="link-group">
        <h3>
          <a href="https://github.com/zambiers/AGameJam" target="_blank" rel="noopener noreferrer" className="links">
            Github
          </a>
        </h3>
        <h3>
          <a href="https://zambiers.itch.io/aster" target="_blank" rel="noopener noreferrer" className="links">
            Itch.io
          </a>
        </h3>
      </div>

      <div className="video-container">
        <iframe
          width="725"
          height="500"
          src="https://www.youtube.com/embed/s7GebfGb4Z8?si=LCllcHmGHXMk4Z3S"
          title="Aster Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <hr className="divider" />
      <h2>For once, my PC worked with me and I ended up not throwing hands with it.</h2>

      <div className="text-image-container">
        <video
          src={gif1}
          className="side-image"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="text-block">
          <p>
            This was the first time I used Unity to publish a game. For sure,
            setting up and linking the GitHub while learning how to use Unity was tough.
          </p>
          <p>
            Similar to Finding Ubuntu, I worked as a Gameplay Programmer while also being the Team Leader.
            Our team, this year, consisted of: two programmers (me and someone I worked with last year),
            one narrative writer, one artist, and one audio person. For a total of five people.
          </p>
        </div>
      </div>

      <p>From all of this, it's such a wonderful proof-of-concept for a game.</p>

      {/* Photo Gallery */}
      <h2>Photo Gallery of Work</h2>
      <div className="filter-buttons">
        {["all", "draft", "demo", "debug", "video"].map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="gallery-wrapper">
        <div className="gallery-grid">
          {filteredScreenshots.map((img, index) => (
            <div key={index} className="image-container">
              {img.type === "video" ? (
                <video
                  src={img.src}
                  className="clickable-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={() => setCurrentIndex(index)}
                />
              ) : (
                <img
                  src={img.src}
                  alt={img.alt}
                  onClick={() => setCurrentIndex(index)}
                  className="clickable-image"
                />
              )}
              <p className="image-caption">{img.alt}</p>
            </div>
          ))}
        </div>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Aster;