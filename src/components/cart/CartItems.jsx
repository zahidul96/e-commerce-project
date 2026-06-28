import React, { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartContext from "../../store/CartContext";
const CartItems = (props) => {
 const {item} = useContext(CartContext);
  return (
    <>
      <Offcanvas show={props.show} onHide={props.onhide} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <div className="d-flex justify-content-center">
          <Offcanvas.Title className="fw-bold border-bottom mb-2 pb-2">
            Items in Cart
          </Offcanvas.Title>
          <hr />
        </div>
        <Offcanvas.Body>
          <Row className="fw-bold border-bottom mb-2 pb-2">
            <Col xs={6}>Item</Col>
            <Col xs={3}>Price</Col>
            <Col xs={3}>Quantity</Col>
          </Row>
          {item.map((element, index) => (
            <Row
              key={index}
              className="align-items-center mb-3 pb-2 border-bottom"
            >
              <Col xs={6} className="d-flex align-items-center gap-3">
                <img
                  src={element.imageUrl}
                  style={{ width: "70px", height: "70px", borderRadius: "5px" }}
                />
                <span className="small">{element.title}</span>
              </Col>
              <Col xs={3} className="text-center">
                ${element.price}
              </Col>
              <Col xs={3} className="text-center">
                {element.quantity}
              </Col>
            </Row>
            
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default CartItems;
