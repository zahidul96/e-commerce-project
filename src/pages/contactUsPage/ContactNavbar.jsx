import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
const ContactNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark navbar-dark">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/" className="text-white fs-5 ms-3">
                HOME
              </Nav.Link>
              <Nav.Link href="/store" className="text-white fs-5 ms-3">
                STORE
              </Nav.Link>
              <Nav.Link href="/about" className="text-white fs-5 ms-3">
                ABOUT
              </Nav.Link>
              <Nav.Link href="/contact" className="text-white fs-5 ms-3">
                CONTACT US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default ContactNavbar;
