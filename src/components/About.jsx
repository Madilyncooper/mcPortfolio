import MadilynPic from '../assets/MadilynPic.png';
// import PartnerPic from '../assets/PartnerPic.png';
// import RockClimb from '../assets/RockClimb.png';
// import SkatePic from '../assets/SkatePic.png';
// import BeachPic from '../assets/BeachPic.png';

function About() {
    return (
        <>
            <div className='picContainer'>
                <img
                    className="aboutImage"
                    src={MadilynPic}
                    alt="Picture of Madilyn Cooper">
                </img>
            </div>
        </>
    )
}


export default About;