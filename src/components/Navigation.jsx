import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <>
      <Navbar className='fixed-top' bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='fs-4' href="#home">Madilyn Cooper</Navbar.Brand>
          <Nav className="me-auto p-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;