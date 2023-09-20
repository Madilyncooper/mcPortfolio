import MadilynPic from '../assets/MadilynPic.png';
import PartnerPic from '../assets/PartnerPic.png';
import RockClimb from '../assets/RockClimb.png';
import BeachPic from '../assets/BeachPic.png';

function About() {
    return (
        <>
            <div className='picContainer'>
                <img
                    className="rockPic"
                    src={RockClimb}
                    alt="Madilyn Cooper belaying someone at a rock climbing gym">
                </img>
                <img
                    className="partnerPic"
                    src={PartnerPic}
                    alt="Madilyn Cooper and her life partner Monica">
                </img>
                <img
                    className="beachPic"
                    src={BeachPic}
                    alt="Manhattan Beach pier overlooking the beach with rainbow lifeguard tower">
                </img>
                <img
                    className="madilynPic"
                    src={MadilynPic}
                    alt="Portrait of Madilyn Cooper">
                </img>
            </div>
            <div className='aboutInfo'>
                <h1>
                    "If our goal is to be tolerant of people who are different than we are, then we really are aiming quite low. Traffic jams are to be tolerated. People are to be celebrated."
                </h1>
                <p className='authorName fs-5'>
                    Glennon Doyle
                </p>
            </div>
        </>
    )
}


export default About;