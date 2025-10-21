import React, { useState} from "react";
import { screenshots } from '../assets/images/escapeza/esc-img-list';
import '../App.css';
import '../Styling/projects.css';

//side image
import gif1 from '../assets/images/escapeza/firstLevel.gif';

function Escapeza() {

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
      <h1>La Escapeza</h1>
      <h2>Girls Make Games 2024</h2>
      <h3>Role: Counselor, Project leader, Project Manager, Head Coder</h3>
      <h3>Engine: Construct 3</h3>

      <div className="video-container">
        <iframe
          width="725"
          height="500"
          src="https://www.youtube.com/embed/MZmoTN48Wpo?si=YxTKLjLji7Endmah"
          title="La Escapeza Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <hr className="divider" />
      <h2>The most chaotic game to happen. And the most fun!</h2>
      <div className="text-image-container">
        <img
          src={gif1}
          alt="First Level"
          className="side-image"
        />
        <div className="text-block">
          <p>
            As this was the second year that I did Girls Make Games, those campers that I had the first year pestered my manager to have me
            again this year. I made sure they knew, I was going to challenge them since this was everyones' third year. 
          </p>
          <p>
            Most of the items that you see were created by the campers. The front page was the only thing created by AI, while things like the 'Magic Arrow', UI design
            and the book button were found, and created, by me.
          </p>
          <p>
            We faced a lot of challenges: animations, unlocking magic, multiple endings, etc. They the end of the camp, my campers wanted nothing to with this project. I had to 
            give them at least one or two days where we didn't have any work. 
        </p>
        </div>
      </div>
      <p>
        They wanted to have real animations and Construct 3 is not the best for that. Not only that, but having the magic unlock and the multiple endings
        were a nightmare when it came to debugging. With enough late nights and working with the tech support, we got through everything that needed to do. 
      </p>
  
      <p>
        I will say this for all projects that have 'Girls Make Games' marked with it: I'm so proud of my campers and the work that they do!
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

export default Escapeza;
