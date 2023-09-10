import { Link } from "react-router-dom";
import AboutMe from '../assets/AboutMe.png';
import ProjectIcon from '../assets/ProjectIcon.png';

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
                    <img width="100" height="100" src="https://img.icons8.com/ios/100/FFFFFF/qr-code--v1.png" alt="qr-code--v1"/>
                        <p className="projects">Projects</p>
                    </Link>
                </li>
                <li><a className='resume'>Resume</a></li>
                <li><a className='contact'>Contact</a></li>
            </ul>
        </div>
    );
}

export default Navigation;