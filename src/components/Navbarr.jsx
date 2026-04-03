import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
const Navbarr = (props) => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark navbar-dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="text-white fs-5 ms-3">
                HOME
              </Nav.Link>
              <Nav.Link href="#link" className="text-white fs-5 ms-3">
                STORE
              </Nav.Link>
              <Nav.Link href="#link" className="text-white fs-5 ms-3">
                ABOUT
              </Nav.Link>
            </Nav>
            <Button variant="outline-light" onClick={props.onshow}>Cart 0</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navbarr;
