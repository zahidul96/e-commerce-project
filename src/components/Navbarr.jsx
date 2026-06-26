import React, { useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import CartContext from "../store/CartContext";
import Button from "react-bootstrap/Button";
import "./Navbarr.css";
const Navbarr = (props) => {
  const ctx = useContext(CartContext);
  const cartItemCount = ctx.item.reduce(
    (total, currentItem) => total + currentItem.quantity,
    0,
  );
  return (
    <>
      <Navbar expand="lg" className="bg-dark navbar-dark">
        <Container>
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
              <Nav.Link href="/login" className="text-white fs-5 ms-3">
                LOGIN
              </Nav.Link>
            </Nav>
            <div className="cart-button-container">
              <Button
                variant="outline-info"
                className="text-white"
                onClick={props.onShow}
              >
                Cart {cartItemCount}
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navbarr;
