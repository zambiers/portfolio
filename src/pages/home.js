import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import headshot from '../assets/images/headshot.jpg';
import accessible from '../assets/components/accessability';
import '../App.css';

// Project Images
import Ubuntu from '../assets/projects/UbuntuTrailer.gif';
import Minutes from '../assets/projects/minutes.png';
import Oil from '../assets/projects/oil.jpg';

function Home() {
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
      description: "Five More Minutes is a dream-logic time puzzle where you’re stuck in the endless loop of alarm-snoozing. As sheep leap over the fence in your half-conscious mind, each one skips time forward — but not evenly. It’s your job to listen for audio cues, decipher time patterns, and decide which sheep to let through… and which ones to correct.",
      Extra: 'Game Jam: UW Tri-Campus Game Jam 2025',
      Language: 'Godot, GitHub',
      url: './minutes',
      image: Minutes,
    },
    {
      id: '3',
      title: "Avah's Oil Spill",
      description: 'A collaborative educational game on environmental awareness.',
      Extra: 'Girls Make Games 2023',
      Language: 'Construct 3',
      url: '/oil',
      image: Oil,
    },
    {
      id: '4',
      title: 'La Escapeza',
      description: 'An escape room-style adventure built for fun and challenge.',
      Extra: 'Girls Make Games 2024',
      Language: 'Construct 3',
      url: '/escapeza',
      image: Oil,
    },
    {
      id: '5',
      title: 'Unreal Prototype',
      description: 'A demo project built for academic exploration and learning.',
      Extra: 'CSS 385 Demo',
      Language: 'Unreal Engine, GitHub',
      url: '',
      image: Oil,
    },
    {
      id: '6',
      title: 'Whack-A-Gnome',
      description: 'A whimsical and fast-paced arcade-style game.',
      Extra: 'Girls Make Games 2025',
      Language: 'Construct 3',
      url: '/gnome',
      image: Oil,
    },
  ]);

  const linkRefs = useRef([]);
  accessible(things, linkRefs);

  return (
    <>
      <div className="home-wrapper">
        <div className="home-page-image">
          <img src={headshot} alt="Avah Afshari" className="headShot" />
        </div>

        <div className="home-text">
          <h1>My name is</h1>
          <h1 className="Name">Avah Afshari</h1>
          <h1>Welcome to my portfolio!</h1>
        </div>
      </div>

      <div className="description">
        <h2>
          I'm currently a Senior in Computer Science and Software Engineering at University of Washington Bothell. My current interest is in anything related to technical artistry and programming — I love anything that blends problem-solving and creativity.
        </h2>
        <h2>
          Whether it's prototyping mechanics, optimizing performance, or adding polish with simple animations, I enjoy bringing ideas to life and learning new tools along the way. I'm always looking to collaborate and grow while making something fun to play.
        </h2>
      </div>

      <hr className="divider" />

      <div className="projects-section">
        <h1 className="lower-home">Projects</h1>

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
