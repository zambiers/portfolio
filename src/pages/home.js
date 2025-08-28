import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import headshot from '../assets/images/headshot.jpg';
import accessible from '../assets/components/accessability';
import '../App.css';

// Project Images
import Ubuntu from '../assets/projects/UbuntuTrailer.gif';
import Minutes from '../assets/images/minutes/Five More Minutes.gif';
import Oil from '../assets/projects/oil.jpg';
import Gnome from '../assets/images/gnome/cs.gif';
import BG from '../assets/images/bg.jpg';


function Home() {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); 
        }
      },
      { threshold: 0.1 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [])
  const [things] = useState([
    {
      id: '1',
      title: 'Finding Ubuntu',
      description:
        "In 'Finding Ubuntu', you step into the shoes of a funeral director who just moved into the small town of Windwood Oaks — a haunted place, fractured by a complicated history and insidious, hidden biases. When the sudden death of a local figure ignites controversy, you're tasked with preparing their final rites, but the story of their life is anything but clear.",
      Extra: 'Game Jam: Unlikely Collaborators Game Jam 2025',
      Language: 'Unreal Engine, GitHub',
      url: './ubuntu',
      image: Ubuntu,
    },
    {
      id: '2',
      title: 'Five More Minutes...',
      description:
      "Five More Minutes is a dream-logic time puzzle where you’re stuck in the endless loop of alarm-snoozing. As sheep leap over the fence in your half-conscious mind, each one skips time forward — but not evenly. It’s your job to listen for audio cues, decipher time patterns, and decide which sheep to let through… and which ones to correct.",
      Extra: 'Game Jam: UW Tri-Campus Game Jam 2025',
      Language: 'Godot, GitHub',
      url: './minutes',
      image: Minutes,
    },
       {
      id: '3',
      title: 'Whack-A-Gnome',
      description: 'Sparkle, the Tulip farmer, is trying to keep out those pesky gnomes from eating them? Are you able to stop them before all the tulips are gone?',
      Extra: 'Girls Make Games 2025',
      Language: 'Construct 3',
      url: '/gnome',
      image: Gnome,
    },

  ]);

  const linkRefs = useRef([]);
  accessible(things, linkRefs);

  return (
    <>
      <div className="home-wrapper"
        style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: '75vh'
      }}>
        <div className="home-page-image">
          <img src={headshot} alt="Avah Afshari" className="headShot" />
        </div>

        <div className="home-text">
          <div class="split-text-container">
          <span className="text-part left">Avah</span>
           <span className="text-part right">Afshari</span>
          </div>
        </div>
      </div>

    <div style={{ height: "100px" }}></div>

      <div className="projects-section">
        <h1 ref={ref}
        className={`lower-home ${isVisible ? "animate" : ""}`}>
          Projects</h1>

        <div className="grid-container">
          {things.map((item) => (
            <div key={item.id} className="grid-item">
              <img src={item.image} alt={item.title} className="card-image" />

              <h1>
                <Link
                  to={item.url}
                  ref={(el) => (linkRefs.current[item.id] = el)}
                >
                  {item.title}
                </Link>
              </h1>

              <h3>
                <span className="language-tag">{item.Language}</span>
              </h3>

              <p>{item.Extra}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
