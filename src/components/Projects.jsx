import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProjectIcon from '../assets/ProjectIcon.png'

function Projects() {

return (
    <div className='cardContainer'>
<Card className='moodRing' style={{ width: '14rem' }} text={'light'}>
      <Card.Img variant="top" src={ProjectIcon} />
      <Card.Body>
        <Card.Title> Mood Ring </Card.Title>
        <Card.Text>
        An app that simulates a mood-ring and tracks how often the user clicks on a certain color/mood. <br></br><br></br><br></br><br></br>
        Javascript, CSS, HTML, Chart.js, API
        </Card.Text>
        <Button target={'_blank'} href='https://madilyncooper.github.io/mood-ring/' variant="light">Preview</Button>
      </Card.Body>
    </Card>


    <Card className='techBlog' style={{ width: '14rem' }} text={'light'}>
      <Card.Img variant="top" src={ProjectIcon} />
      <Card.Body>
        <Card.Title> Tech Blog </Card.Title>
        <Card.Text>
An application where users can post/interact with articles pertaining to the tech world. <br></br><br></br>
Sequelize, Bootstrap, JavaScript, Node.js, Express.js, Handlebars.js, restful API 
        </Card.Text>
        <Button target={'_blank'} href='https://tech-blogss-8ab7d7dde633.herokuapp.com/' variant="light">Preview</Button>
      </Card.Body>
    </Card>

    <Card className='garagio' style={{ width: '14rem'}} text={'light'}>
      <Card.Img variant="top" src={ProjectIcon} />
      <Card.Body>
        <Card.Title> Garagio </Card.Title>
        <Card.Text>
An E-commerce application for those wanting to buy or sell second hand items of all kinds. <br></br><br></br><br></br>
React.js, Graphql, Javascript, 
        </Card.Text>
        <Button target={'_blank'} href='https://garagio-16dff4078a93.herokuapp.com/' variant="light">Preview</Button>
      </Card.Body>
    </Card>

    <Card className='leftOvers' style={{ width: '14rem' }} text={'light'}>
      <Card.Img variant="top" src={ProjectIcon} />
      <Card.Body>
        <Card.Title> LeftOvers </Card.Title>
        <Card.Text>
An application that was designed to help distribute excess food to those in need. <br></br> <br></br>
Sequelize, JavaScript, Node.js, Express.js, Handlebars.js, Google Maps Geolocation
        </Card.Text>
        <Button target={'_blank'} href='https://leftovers.herokuapp.com/' variant="light">Preview</Button>
      </Card.Body>
    </Card>
    </div>
);
}

export default Projects;