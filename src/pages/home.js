import React, { useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import headshot from '../assets/images/headshot.jpg';
import accessible from '../assets/components/accessability';
import '../App.css';

// Images
import Ubuntu from '../assets/projects/Ubuntu.png'
import Minutes from '../assets/projects/minutes.png'
import Oil from '../assets/projects/oil.jpg'


function Home() {
    const [things, setThings] = useState([
          {
            id: '1',
            title: 'Finding Ubuntu',
            description: "In 'Finding Ubuntu', you step into the shoes of a funeral director in the small town of Windwood Oaks - a haunted place, fractured by a complicated history, years of unresolved personal grievances, and insidious, hidden biases. When the sudden death of a local figure ignites controversy, you’re tasked with preparing their final rites, but the story of their life is anything but clear. Conflicting accounts from the townspeople paint vastly different pictures of who they were, and even the body itself holds secrets waiting to be uncovered.",
            Extra: "Game Jam: Unlikely Collaborators Game Jam 2025",
            Language: "Unreal Engine, GitHub" ,
            url: './ubuntu',
            image: Ubuntu
          },
          {
            id: '2',
            title: 'Five More Minutes...',
            description: "I did the UI",
            Extra: "Game Jam: UW Tri-Campus Game Jam 2025",
            Language: "Godot, GitHub" ,
            url: './minutes',
            image: Minutes
          },
          {
            id: '3',
            title: "Avah's Oil Spill",
            description: "Was the a fellow ",
            Extra: "Girls Make Games 2023",
            Language: "Construct 3" ,
            url: '',
            image: Oil
          },
          {
            id: '4',
            title: "La Escapeza",
            description: "Was the a fellow ",
            Extra: "Girls Make Games 2024",
            Language: "Construct 3" ,
            url: '',
            image: Oil
          },
          {
            id: '5',
            title: "Unreal Prototype",
            description: "for a class",
            Extra: "CSS 385 Demo",
            Language: "Unreal Engine, Github" ,
            url: '',
            image: Oil
          },
        ]);
      const linkRefs = useRef([]);
      const keyInput = accessible(things, linkRefs);

  return (
    <div className="home-wrapper">
      <div className="home-page-image">
        <img src={headshot} alt="Avah Afshari" className="headShot" />
      </div>
      
      <div className="home-text">
        <h1>My name is</h1>
        <h1 className='Name'> Avah Afshari</h1>
        <h1>Welcome to my portfolio!</h1>
      </div>

      <h2>
          I'm currently a Senior in Computer Science and Software Engineering at University of Washington Bothell. For the past year and a half, 
          I've been focusing on the programming ascept, and more recently started to do techinical animation/ artistry.    
           My preferred game engine is Unreal Engine, while having a background with Blender and Motion Capture. 
      </h2>
      <h2>
          Whether it's prototyping mechanics, optimizing performance, or 
          adding polish with simple animations, I enjoy bringing ideas to life and learning new 
          tools and techniques along the way. I'm always looking to collaborate, and learn another thing or two 
          while making something fun to play.
      </h2>

      <hr className='divider' />
    <div className="projects-section">
  <h1 className='lower-home'>Projects</h1>
    
  <div className="grid-container">
    {things.map((item) => (
      <div key={item.id} className="grid-item">
        <img src={item.image} alt={item.title} className="card-image" />
        <h1>
          <Link to={item.url} ref={(el) => (linkRefs.current[item.id] = el)}>
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


      <hr className='divider' />
      

  </div>    
  );
};

export default Home;
