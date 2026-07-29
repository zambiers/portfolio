import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../assets/components/home-lists';
// import { stats } from '../assets/components/stats-list';
// import { experience } from '../assets/components/experience-list';
// import { designSkills, technicalSkills } from '../assets/components/skills-list';
import accessible from '../assets/components/accessability.js';
import '../base.css';

const headshot = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/headshot.jpg";

// Counts up from 0 to `value` once it scrolls into view
function StatCounter({ value, label }) {
  const ref = useRef();
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(value);
    }
    requestAnimationFrame(tick);
  }, [started, value]);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number">{count.toLocaleString()}+</span>
      <span className="stat-label">
        {label.split('\n').map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}
      </span>
    </div>
  );
}

function Home() {
  const linkRefs = useRef([]);
  accessible(projects, linkRefs);

  return (
    <>
      {/* Hero */}
      <div className="home-wrapper">
        <div className="home-page-image">
          <img src={headshot} alt="Avah Afshari" className="headShot" />
        </div>

        <div className="home-text">
          <div className="split-text-container">
            <span className="text-part left">Avah</span>
            <span className="text-part right">Afshari</span>
          </div>
          <h3>Gameplay Programmer & Fullstack Software Engineer</h3>

          <p className="home-blurb">
            I love anything and everything related to games! While my background is in
            Computer Science and Software Engineering, I always find ways to integrate
            everything that I learn into my work — creating interesting and adorable games
            with wonderful people, and telling any story I want, in any way I want.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="hero-btn">View Projects</Link>
            <a href="/resume.pdf" className="hero-btn secondary" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Stats row */}
      {/* <div className="stats-row">
        {stats.map((s) => (
          <StatCounter key={s.id} value={s.value} label={s.label} />
        ))}
      </div>

      <div className="divider" /> */}

      {/* Projects */}
      <div className="projects-section">
        <h1 className="section-heading">Projects</h1>

        <div className="grid-container">
          {projects.map((item) => (
            <div key={item.id} className="grid-item">
              <div className="project-image">
                <img src={item.image} alt={item.title} className="card-image" />
              </div>

              <div className="project-info">
                <h2>
                  <Link to={item.url} ref={(el) => (linkRefs.current[item.id] = el)}>
                    {item.title}
                  </Link>
                </h2>

                {item.Role && <p className="card-role">{item.Role}</p>}
                {item.Extra && <p className="card-extra">{item.Extra}</p>}
                {item.Tools && <p className="card-tools">{item.Tools}</p>}
                {item.Length && <p className="card-length">{item.Length}</p>}
                {item.description && <p className="project-description">{item.description}</p>}

                <Link className="view-project" to={item.url}>View Project →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* Experience timeline */}
      {/* <div className="experience-section">
        <h1 className="section-heading">Experience</h1>

        <div className="timeline">
          {experience.map((job) => (
            <div key={job.id} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h2>{job.role}</h2>
                <h3>{job.company}</h3>
                <p>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider" /> */}

      {/* Skills */}
      {/* <div className="skills-section">
        <h1 className="section-heading">Skills</h1>

        <div className="skills-columns">
          <div className="skills-col">
            <h2>Design</h2>
            <ul>
              {designSkills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>
          <div className="skills-col">
            <h2>Technical</h2>
            <ul>
              {technicalSkills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;