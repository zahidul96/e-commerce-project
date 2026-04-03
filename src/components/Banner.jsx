import React from "react";
import { Container,Row,Col } from "react-bootstrap";
const Banner = () => {
  return (
    <>
      <Container fluid className="bg-secondary mt-1 py-5">
        <Row>
          <Col><h1 className="display-1 fw-bold text-center">The Generics</h1></Col>
        </Row>
      </Container>
    </>
  );
};
export default Banner;
