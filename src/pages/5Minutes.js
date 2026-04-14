import React, { useState } from "react";
import '../App.css';
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
      <h2>University of Washington Tri-Campus Game Jam 2025</h2>
      <h3>Theme: Delay the Inevitable</h3>
      <h3>Role: UI/UX Programmer and Designer</h3>
      <h3>Engine: Godot</h3>

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
      <h2>We all want five more minutes. Well, at some point, you have to wake up. The question is, how long are you going to delay the inevitable?</h2>

      <div className="text-image-container">
        <img
          src={gif1}
          alt="Sheep Moving"
          className="side-image"
        />
        <div className="text-block">
          <p>
            This was the first time that I got to use Godot and Github so it was really interesting figuring out how we wanted to do this. Most of my work ended
            up being with finding most of the assets and creating the menus that were needed for this game.
          </p>
          <p>
            Now what was interesting is my partner for this game was based out of Seattle Campus while I would be doing most of my coding at Bothell Campus. Since this game jam was only one week,
            both him and I would work in between our courses and while chatting on discord of changes we made while the other person was away.
          </p>
        </div>
      </div>

      <p>
        The idea came from my experiences with ADHD, depression and insomnia, and how medications were keeping me up at night. I would get days where I would sleep through
        multiple alarms and be late for class or anything important.
      </p>
      <p>
        Part of the key gameplay is the sheep. Each color of sheep is a different hour amount that passed. If three sheep were to hit the fence, then your phone dies and you're late for your exam. Get the
        correct amount of sheep over the fence, then you get enough sleep for your exam and you're on time.
      </p>
      <p>
        I enjoyed this concept since I thought this was the cutest idea. I'm really happy this turned out the way that I was hoping it would!
      </p>

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