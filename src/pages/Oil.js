import React, { useState} from "react";
import { screenshots } from '../assets/images/oil/oil-img-list.js';
import '../App.css';
import '../Styling/projects.css';

//side image
import img1 from '../assets/images/oil/bubbleCar.png';

function Oil() {

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
      <h1>Avah's Oil Spill</h1>
      <h2>Girls Make Games 2023</h2>
      <h3>Role: Counselor, Project leader, Project Manager, Head Coder</h3>
      <h3>Engine: Construct 3</h3>

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
          src="https://www.youtube.com/embed/qbIMvv6MgM0?si=zvP1pWCuyVzclhNt"
          title="Avah's Oil Spill Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <hr className="divider" />
      <h2>As I was putting this in my portfolio, I forgot how adorable this game is!</h2>
      <div className="text-image-container">
        <img
          src={img1}
          alt="Setting up Opening Cut scene"
          className="side-image"
        />
        <div className="text-block">
          <p>
            Since this was the first time that I was working with my campers, they INSISTED on the main character being
            named after me. In their words, "we need to immortalize our counselor forever!" To that, I still find it funny to this day.
          </p>
          <p>
            It just makes me happy to know that they loved making this. All my campers did everything from music, art, coding, and even animations.
            The oldest person that I had helped me find some of the art that we needed but most of the harder, more intense coding was done by me.
          </p>
        </div>
      </div>

      <p>
        Now, even though most of them wanted to do art, we used a Kanban board to organize how we wanted to do everything. By far, this was
        the most helpful thing that we've use when it comes to tools.
      </p>
  
      <p>
        Out of all the games that I've made with my campers, this one will forever be a core memory for me 
        and my campers!
      </p>

      <h2>Photo Gallery of Work</h2>
      <div className="filter-buttons">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("code")}>Code</button>
          <button onClick={() => setFilter("layout")}>Layout</button>
          <button onClick={() => setFilter("demo screenshots")}>Demo Screenshots</button>
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
