import MadilynPic from '../assets/MadilynPic.png';

function About() {
    return (
        <>
            <div className='picContainer'>
                <img
                    className="madilynPic"
                    src={MadilynPic}
                    alt="Portrait of Madilyn Cooper">
                </img>
            </div>
            <div className='quoteContainer'>
                <h2 className='quoteText fs-1'>
                    “Diversity is not about how we differ. Diversity is about embracing one another's uniqueness.”
                </h2>
                <p className='quoteAuthor'>-Ola Joseph</p>
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

                <div className='what'>
                    <h1>
                        What do I bring to the table?
                    </h1>
                    <p>
                        My background in the arts has given me invaluable communication, emotional, and creative
                        skills. These skills shape my pursuit to be a kindhearted and thoughtful
                        colleague. My imagination allows me to think outside of the box, and I am forever committed
                        growth.
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

            </div>
        </>
    )
}


export default About;