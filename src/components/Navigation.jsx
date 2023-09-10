import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
    return (
        <>
        <h1>Hello navigation</h1>
            {/* /<Navbar className='fixed-top p-1' bg="light" data-bs-theme="light">
                <Container>
                    <Nav className="me-auto p-4 navList fs-5">
                        <Nav.Link target='blank' className='about' href="/about">About</Nav.Link>
                        <Navbar.Collapse id="navbar-dark-example">
                            <Nav >
                                <NavDropdown
                               className='projects'
                                    id="nav-dropdown-dark-example"
                                    title="Projects"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item target='blank' href="#action/3.1">MoodRing</NavDropdown.Item>
                                    <NavDropdown.Item target='blank' href="#action/3.2">
                                        LeftOvers
                                    </NavDropdown.Item>
                                    <NavDropdown.Item  target='blank' href="#action/3.3">Garagio</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item target='blank' href="https://github.com/Madilyncooper">
                                        GitHub
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav.Link target='blank' href="https://docs.google.com/document/d/17hIFSzhCEs0dAwyi7bsUO2TpJRhqiTAGYA9ApXO62s8/edit?usp=sharing">Resume</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>  */}
        </>
    );
}

export default Navigation;