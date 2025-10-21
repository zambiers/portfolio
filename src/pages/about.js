import { useEffect, useState } from 'react';
import BG from '../assets/images/bg.jpg';
import aboutshot from '../assets/images/aboutMe1.jpg';
import '../App.css';
import '../assets/components/NavBarStyles.css';

export default function About() {

  return (
    <div
      className="about-wrapper"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '120vh',
        paddingBottom: '150px',
        alignItems: 'center',
      }}
    >
     <div className="about-content-area">
        <div className="about-page-image">
          <img src={aboutshot} className="aboutShot" />
        </div>

        <div className="about-text">
          <h2>I love anything and everything related to games!</h2>
          <p>
            My love for games started with 'Aliens Versus Predator: Extinction' for the PS2
            when my dad realized that it wasn't Halo (yes, you read that correctly). When I was older,
            I got the Xbox and Halo Master Chief Collection.
          </p>
          <p>
            While my background is in Computer Science and Software Engineering, I always find ways
            to integrate everything that I learn into my work.
          </p>
          <p>
            I've worked with lots of wonderful people to create interesting and adorable games, and
            it’s changed how I view coding.
          </p>
          <p>
            The most rewarding thing about creating a game is knowing you can tell any story you want,
            in any way you want, or create something just for fun.
          </p>
        </div>
      </div>
      
      {/* The button is now outside the content-area, so it naturally sits below and is centered by the .about-wrapper grid. */}
      <a
        href="https://docs.google.com/document/d/1qsjwTDvZWv8OhXQaUVxOenXebu9RKbbL/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-Button links-Resume"
      >
        View my Resume!
      </a>
    </div>
  );
}
