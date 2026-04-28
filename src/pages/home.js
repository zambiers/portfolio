import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {projects} from '../assets/components/home-lists';
import accessible from '../assets/components/accessability.js';
import '../App.css';

const BG = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/bg.jpg";
const headshot = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/headshot.jpg";

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

  const linkRefs = useRef([]);
  accessible(projects, linkRefs);

  return (
    <>
      {/* Top of home section */}
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
          <div className="split-text-container">
            <span className="text-part left">Avah</span>
            <span className="text-part right">Afshari</span>
          </div>
          <h3>Gameplay Programmer & Fullstack Software Engineer</h3>

          {/* Blurb */}
          <p className="home-blurb">
            I love anything and everything related to games! While my background is in
            Computer Science and Software Engineering, I always find ways to integrate
            everything that I learn into my work — creating interesting and adorable games
            with wonderful people, and telling any story I want, in any way I want.
          </p>
        </div>
      </div>

      <div style={{ height: "100px" }}></div>

      {/* Projects section */}
      <div className="projects-section">
        <h1
          ref={ref}
          className={`lower-home ${isVisible ? "animate" : ""}`}
        >
          Projects
        </h1>

        <div className="grid-container">
          {projects.map((item) => (
            <div key={item.id} className="grid-item">
              <img
                src={item.image}
                alt={item.title}
                className="card-image"
              />

              <h1>
                <Link
                  to={item.url}
                  ref={(el) => (linkRefs.current[item.id] = el)}
                >
                  {item.title}
                </Link>
              </h1>
              
              {/* Role + Extra + Tools + Length below image */}
              {item.Role && <p className="card-role">{item.Role}</p>}
              {item.Extra && <p className="card-extra">{item.Extra}</p>}
              {item.Tools && <p className="card-tools">{item.Tools}</p>}
              {item.Length && <p className="card-length">{item.Length}</p>}

              {item.description && <p>{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;