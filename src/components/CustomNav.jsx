import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function CustomNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Pepe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to="/"className="nav-link">Home</Link>
            <Link to="/favourites" className='nav-link'>Favourites</Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    )
}

export default CustomNav