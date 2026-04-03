import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
const CartItems = (props) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];
  let total = 0;
  cartElements.forEach((ele) =>{
    total = total + ele.price
  })
  return (
    <>
      <Offcanvas show={props.show} onHide={props.onhide} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <div className="d-flex justify-content-center">
          <Offcanvas.Title className="fw-bold border-bottom mb-2 pb-2">Items in Cart</Offcanvas.Title>
          <hr />
        </div>
        <Offcanvas.Body>
          <Row className="fw-bold border-bottom mb-2 pb-2">
            <Col xs={6}>Item</Col>
            <Col xs={3}>Price</Col>
            <Col xs={3}>Quantity</Col>
          </Row>
          {
            cartElements.map((element, index)=>(
                <Row key={index} className="align-items-center mb-3 pb-2 border-bottom">
                    <Col xs={6} className="d-flex align-items-center gap-3">
                    <img src={element.imageUrl} style={{width : "70px", height:"70px", borderRadius:"5px"}}
                    />
                    <span className="small">{element.title}</span>
                    </Col>
                    <Col xs={3}className="text-center">${element.price}</Col>
                    <Col xs={3} className="text-center">{element.quantity}</Col>
                </Row>
            ))
          }
           <Row>
            <Col className="mt-2 justify-content-end d-flex gap-4">
               <h4>Total</h4>
               <span style={{fontSize:"23px"}}>${total}</span>
            </Col>
          </Row>
          <Row>
            <Col className="mt-4 justify-content-center d-flex">
               <Button variant="primary">Purchase</Button>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default CartItems;
