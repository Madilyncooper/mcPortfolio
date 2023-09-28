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
            <div className='skills'>
            <p className='problemSolver fs-1'>Problem Solver.</p>
            <p className='creative fs-1'>Creative.</p>
            <p className='leader fs-1'>Leader.</p>
            <p className='teamOriented fs-1'>Team Oriented.</p>
            <p className='passionate fs-1'>Passionate.</p>
            </div>
            <div className='bio'>
                <div className='who'>
                <h1>
                Who am I?
                </h1>
                <p>
                Full Stack web developer who is passionate about solving problems and creating clean, 
                effective, and well-structured applications.
                I specialize in JavaScript, React.JS, Node, Restful APIs, and SQL, as well as many other 
                back-end and front-end technologies.
                </p>
                </div>

                <div className='why'>
                <h1>
                Why Tech?
                </h1>
                <p>
                As a queer, black woman in tech, I take pride in bridging the gap between marginalized 
                communities and the accessibility into this field. 
                </p>
                </div>

                <div className='what'>
                <h1>
                What do I bring to the table?
                </h1>
                <p>
                My background in the arts has given me invaluable communication, emotional, and creative 
                skills. These skills have helped shape my pursuit to be a kindhearted and thoughtful 
                colleague, and lend themselves to my ability to constructively think outside the box .
                I find joy in collaborating with others to produce the highest quality product, and I excel in 
                team leadership roles. I am forever committed to growth, whether that be individually, or collectively
                with my team.  
                </p>
                </div>
            </div>
        </>
    )
}


export default About;