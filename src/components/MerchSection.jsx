import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const MerchSection = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h2 className="text-center mt-5">Merch</h2>
          </Col>
        </Row>
        <Row className="d-flex d-flex justify-content-around mt-3 mb-4" id="content">
          <Col lg={3} style={{ maxWidth: "22%" }}>
            <h3 className="text-center">T-Shirt</h3>
            <div className="d-flex justify-content-center">
              <img src="https://prasadyash2411.github.io/ecom-website/img/Shirt.png" />
            </div>
            <div className="d-flex justify-content-between mt-3">
              <span>$12.09</span>
              <Button variant="primary">Add to Cart</Button>
            </div>
          </Col>
          <Col lg={3} style={{ maxWidth: "22%" }}>
            <h3 className="text-center">Coffee Cup</h3>
            <div className="d-flex justify-content-center">
              <img src="https://prasadyash2411.github.io/ecom-website/img/Cofee.png" />
            </div>
            <div className="d-flex justify-content-between mt-3">
              <span>$12.09</span>
              <Button variant="primary">Add to Cart</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MerchSection;
