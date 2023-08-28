import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
    return (
        <>
            <Navbar className='fixed-top p-4' bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand className='fs-2' href="#home">Madilyn Cooper</Navbar.Brand>
                    <Nav className="me-auto p-4 navList fs-5">
                        <Nav.Link className='about' href="#home">About</Nav.Link>
                        <Navbar.Collapse id="navbar-dark-example">
                            <Nav >
                                <NavDropdown
                               className='projects'
                                    id="nav-dropdown-dark-example"
                                    title="Projects"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item href="#action/3.1">MoodRing</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        LeftOvers
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Garagio</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="https://github.com/Madilyncooper">
                                        GitHub
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav.Link href="#pricing">Resume</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;