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
{/*Top of home section*/}
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
          <p> Gameplay Programmer</p>
          <p> Fullstack Software Engineer</p>
        </div>
      </div>

    <div style={{ height: "100px" }}></div>

{/*Projects section*/}
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
