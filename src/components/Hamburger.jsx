import MenuIcon from '../assets/MenuIcon.png';
import { Link } from "react-router-dom";


function Hamburger() {
  return (
    <Link to="/">
      <img
        className='burger'
        src={MenuIcon}
        alt="Navigation Menu Hamburger">

      </img>
    </Link>
  );
}

export default Hamburger;


