import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function MyNavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/welcome-section">
          Welcome
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/who-am-i">
              About
            </Nav.Link>

            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>

            <Nav.Link as={Link} to="/gdv">
              GDV
            </Nav.Link>

            <Nav.Link as={Link} to="/contact-section">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
