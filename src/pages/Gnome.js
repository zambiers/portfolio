import { useState} from "react";
import '../App.css';
import '../Styling/projects.css';

// photos
import img1 from  '../assets/images/gnome/battlefield es.png';
import img2 from  '../assets/images/gnome/battlefield setup.png';
import img3 from  '../assets/images/gnome/buffy layout.png';
import img4 from  '../assets/images/gnome/gnomes attacking.png';
import img5 from  '../assets/images/gnome/shed es.png';
import img6 from  '../assets/images/gnome/sparkle moving.png';
import gif1 from '../assets/images/gnome/cs.gif';

function Escapeza() {
  const screenshots = [
    { src: img1, alt: "Beginning of Battlefield Layout's Eventsheet", category: "code" },
    { src: img2, alt: "Battlefield Layout Setup", category: "setup" },
    { src: img3, alt: "Buffy the buff, BUFF, gnome Layout Setup", category: "setup" },
    { src: img4, alt: "Gnome Attacking Code - Battlefield Eventsheet", category: "code" },
    { src: img5, alt: "Shed Eventsheet", category: "code" },
    { src: img6, alt: "Sparkle the Farmer Movement - Battlefield Eventsheet", category: "code" },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);
  const [filter, setFilter] = useState("all");

    // Filtered list for display
    const filteredScreenshots = screenshots.filter(
      (img) => filter === "all" || img.category === filter
    );

  // Modal navigation
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
      <h1>Whack-A-Gnome</h1>
      <h2>Girls Make Games 2025</h2>
      <h3>Role: Counselor, Project leader, Project Manager, Head Coder</h3>
      <h3>Engine: Construct 3</h3>

    
      <div className="video-container">
        <iframe
          width="725"
          height="500"
          src="https://www.youtube.com/embed/qbIMvv6MgM0?si=zvP1pWCuyVzclhNt"
          title="Finding Ubuntu Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <hr className="divider" />
      <h2>I kid you not. The idea for this game came from a camper drawing a bow for a character (and that character unfortunately didn't make it here..)</h2>
      <div className="text-image-container">
        <img
          src={gif1}
          alt="Setting up World Navi"
          className="side-image"
        />
        <div className="text-block">
          <p>
            You think that making a tower-defense game would be something simple to code, but NOPE. This year, I told my campers that I wanted to push and challenge them. I gave them a inch, they took a mile. 
            Out of each of the games that they did, this was the most difficult thing they've ever created. 
          </p>
          <p>
            I'm not kidding when I say, they wanted a hard game. At first, the game is easy enough so you understand what's happening. By the time you get to Wave 3, you hope and pray you have 
            skill at this to get all the Gnomes. 
          </p>
          <p>
            Now, what made this really fun was having other groups at GMG play test and them trying to guide their campmate on how to beat a hard game.
          </p>
        </div>
      </div>

      <p>
        Each year, I set up a Kanban board. I had them find and create all the assets that want to use. Then, the ones who really like coding,
        helped me with all the difficult parts of coding. Those who didn't like coding as much, I had them create more assets that we can use. 
      </p>
      <p>
        When it came to Presentation Day, the day where campers present to parents, I spent that enire morning debugging while they were rehearsing. Unfortunately, 
        I missed a few bugs and it messed up a lot of their work. So I ended up improvising and talking about how they each component worked, and played the parts that
        weren't so buggy.
      </p>
      <p>
        The weeks after GMG, I ended up going in and fixing the game. Thankfully, it's now a fully playable game they can play anytime!
      </p>

      <h2>Photo Gallery of Work</h2>
      <div className="filter-buttons">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("code")}>Code</button>
          <button onClick={() => setFilter("setup")}>Setup</button>
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
