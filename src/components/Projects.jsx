import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProjectIcon from '../assets/ProjectIcon.png'

function Projects() {

return (
    <div className='cardContainer'>
<Card className='moodRing' style={{ width: '12rem' }} text={'light'}>
      <Card.Img variant="top" src={ProjectIcon} />
      <Card.Body>
        <Card.Title>- Mood Ring -</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="light">Preview</Button>
      </Card.Body>
    </Card>


    <Card className='techBlog' style={{ width: '12rem' }} text={'light'}>
      <Card.Img variant="top" src={ProjectIcon} />
      <Card.Body>
        <Card.Title>- Tech Blog -</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="light">Preview</Button>
      </Card.Body>
    </Card>

    <Card className='garagio' style={{ width: '12rem'}} text={'light'}>
      <Card.Img variant="top" src={ProjectIcon} />
      <Card.Body>
        <Card.Title>- Garagio -</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="light">Preview</Button>
      </Card.Body>
    </Card>

    <Card className='leftOvers' style={{ width: '12rem' }} text={'light'}>
      <Card.Img variant="top" src={ProjectIcon} />
      <Card.Body>
        <Card.Title>- LeftOvers -</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="light">Preview</Button>
      </Card.Body>
    </Card>
    </div>
);
}

export default Projects;