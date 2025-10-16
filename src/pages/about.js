import Home from './home';
import Navbar from '../assets/components/NavBar';
import '../App.css'; 

//Images
import BG from '../assets/images/bg.jpg';
import aboutshot from '../assets/images/aboutMe1.jpg';


export default function About(){
        
      return(
      <div className="about-wrapper"
        style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: '75vh'
      }}>
        <div className="about-page-image">
          <img src={aboutshot} className="aboutShot" />
        </div>

        <div className="about-text">
          <h2>I love anything and everything related to games! </h2>
          <p> 
                  My love for games started with 'Aliens Versus Predator: Extinction' for the PS2
                  when my dad realized that it wasn't Halo. When I was old even, I got the Xbox and Halo Master Chief 
                  Collection. 
            </p>
            <p>
                  While my background is in Computer Science and Software Engineering, I always find ways to integrate everything
                  that I learn into my work.
            </p>
            <p>
                  I've worked lots of wonderful people to create some interesting and adorable games and it's changed how
                  I view coding.
            </p>
            <p>
                  The most rewarding thing about creating a game knowing you can tell any story you want
                  in any way you want. Or create something just for the fun of it. 
            </p>
        </div>
      </div>

      );
}