import { Navbar, Nav } from 'react-bootstrap';
import '../styles/navBar.scss';

export default function NavBar() {
  return (
    <Navbar className="navbar-custom" expand="lg" bg="light" >
      <Navbar.Brand href="#home" className="navbar-brand-custom">Boulder Paella</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"
      className="navbar-toggle-custom"/>
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-custom">
        <Nav className="ml-auto">
          <Nav.Link className="nav-link-custom" href="/">Home</Nav.Link>
          <Nav.Link href="/about" className="nav-link-custom">About</Nav.Link>
          <Nav.Link href="/menu" className="nav-link-custom">Menu</Nav.Link>
          <Nav.Link className="nav-link-custom" href="/services">Services</Nav.Link>
          <Nav.Link  className="nav-link-custom"href="/testimonials">Testimonials</Nav.Link>
          <Nav.Link className="nav-link-custom" href="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


