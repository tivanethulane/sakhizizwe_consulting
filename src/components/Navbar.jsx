import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./Navbar.css";

const NavigationBar = () => {
  // State to control navbar collapse
  const [expanded, setExpanded] = useState(false);

  // Close navbar after click
  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="custom-navbar"
      expanded={expanded} // control collapse state
    >
      <Container>
        <Navbar.Brand href="#hero" onClick={handleNavLinkClick}>
  <img
    src={`${process.env.PUBLIC_URL}/favicon.ico`}
    alt="Logo"
    width="50"
    height="50"
    className="d-inline-block align-top"
  />
</Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)} // toggle menu
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#services" onClick={handleNavLinkClick}>
              Services
            </Nav.Link>
            <Nav.Link href="#about" onClick={handleNavLinkClick}>
              About Us
            </Nav.Link>
            <Nav.Link href="#vision" onClick={handleNavLinkClick}>
              Vision
            </Nav.Link>
            <Nav.Link href="#whyus" onClick={handleNavLinkClick}>
              Why Us
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavLinkClick}>
              Contact
            </Nav.Link>
            {/* Add the Button inside Nav so it collapses too */}
            <Button
              href="#contact"
              size="lg"
              variant="primary"
              className="ms-3 animate__animated animate__zoomIn"
              onClick={handleNavLinkClick} // <-- closes menu
            >
              Free Consultation
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
