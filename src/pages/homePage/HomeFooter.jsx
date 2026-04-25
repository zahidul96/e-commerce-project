import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const HomeFooter = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            xs={12}
            className="d-flex align-items-center py-3"
            style={{ backgroundColor: "#56CCF2", paddingLeft:"14%" }}
          >
            <h3 className="display-5 text-white fw-bold">The Generics</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HomeFooter;
