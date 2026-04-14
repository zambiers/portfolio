import '../App.css';
import '../Styling/contact.css'; 

const github = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/links/github.png";
const linked = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/links/linked.png";
const itch = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/links/itch.png";

function Contact(){
    return(<>
    <h1 className='lower-home'>Project Links in Socials</h1>
          <div className='socials'>
          <a
              href="https://github.com/zambiers" target="_blank" rel="noopener noreferrer" className="circle-link">
              <img src={github} alt="GitHub" />
          </a>
    
           <a
              href="https://www.linkedin.com/in/avah-afshari/" target="_blank" rel="noopener noreferrer" className="circle-link">
              <img src={linked} alt="LinkedIn" />
          </a>
    
          <a
              href="https://zambiers.itch.io/" target="_blank" rel="noopener noreferrer" className="circle-link">
              <img src={itch} alt="Itch.io" />
          </a>
          </div>
    
          <div>
            <h1 className='lower-home'>Contact</h1>
              <div className='socials'>
                <a
                  href="https://www.linkedin.com/in/avah-afshari/" target="_blank" rel="noopener noreferrer" className="circle-link">
                  <img src={linked} alt="LinkedIn" />
                </a>
    
              </div>
          </div>
          </>
    
    );
}

export default Contact;