import { Link } from "react-router-dom";
import AboutMe from '../assets/AboutMe.png';
import ProjectIcon from '../assets/ProjectIcon.png';
import ResumeIcon from '../assets/ResumeIcon.png';
import ContactIcon from '../assets/ContactIcon.png';

function Navigation() {
    return (
        <div className='navContainer'>
            <h1 className='explore'>Get <br></br>to Know Me</h1>
            <ul className='navList'>
                <li>
                    <Link className='aboutParent' to="/about">
                        
                        <img
                            className="aboutImage"
                            src={AboutMe}
                            alt="White icon of a head with cogs and gears inside">
                        </img>
                        <p className="about">AboutMe</p>

                    </Link>
                </li>
                <li>
                    <Link className='projectParent' to="/projects">
                        <img
                            width="100"
                            height="100" src={ProjectIcon}
                            alt="qr-code--v1" />
                        <p className="projects">Projects</p>
                    </Link>
                </li>
                <li>
                    <Link className='resumeParent' onClick={() => window.open("https://docs.google.com/document/d/17hIFSzhCEs0dAwyi7bsUO2TpJRhqiTAGYA9ApXO62s8/edit?usp=sharing", "_blank")}>
                        <img
                            width="100"
                            height="100" src={ResumeIcon}
                            alt="paperclip" />
                        <p className="resume">Resume</p>
                    </Link>
                </li>
                <li>
                    <Link className='contactParent' to="/contact">
                        <img
                            src={ContactIcon}
                            alt="paperclip" />
                        <p className="contact">Contact</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;