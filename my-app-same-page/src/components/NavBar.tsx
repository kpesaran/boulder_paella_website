import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/navBar.scss';
//anchor when using #.

const NavBar: React.FC = () => {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Brand href="#home" className="navbar-brand-custom"> Boulder Paella: Event Catering & Farmer Market Stand</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle-custom" />
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-custom">
        <Nav className="ml-auto" >
          <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
          <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
          <Nav.Link href="#services" className="nav-link-custom">Services</Nav.Link>
          <Nav.Link href="#testimonials" className="nav-link-custom">Testimonials</Nav.Link>
          <Nav.Link href="#contact" className="nav-link-custom">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
