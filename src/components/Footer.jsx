import LocationIcon from '../assets/LocationIcon.png';
import NumberIcon from '../assets/NumberIcon.png';
import EmailIcon from '../assets/EmailIcon.png';

function Footer() {
    return (
        <div className="footerContainer">
            <ul className="contactInfo">
                <li className="location">
                    <img
                        src={LocationIcon}
                        alt="location icon">
                    </img>
                    Los Angeles, CA
                </li>
                <li className="number">
                    <img
                        src={NumberIcon}
                        alt="Phone icon">
                    </img>
                510.326.9216
                </li>
                <li className="email">
                    <img
                        src={EmailIcon}
                        alt="Email icon">
                    </img>
                    madilynmcooper@gmail.com
                </li>
            </ul>
            <ul className="contactLinks">
                <li className='linksInfo'>
                    <a href='#'>
GitHub
                    </a>
                </li>
                <li className='linksInfo'>
                    <a href='#'>
LinkedIn
                    </a>
                </li>
                <li className='linksInfo'>
                    <a href='#'>
Resume
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;