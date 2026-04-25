import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const HomeMain = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-3">
          <h1 className="fw-bold">Tours</h1>
        </Col>
      </Row>
      <ul className="list-unstyled mt-2">
        <li>
          <Row className="justify-content-center mb-3">
            <Col
              xs={11}
              md={7}
              className="border-bottom pb-2 d-flex align-items-center justify-content-between"
            >
              <span style={{ width: "15%" }}>July 16</span>
              <span style={{ width: "20%" }}>DETROIT, MI</span>
              <span style={{ width: "40%" }}>DTE ENERGY MUSIC THEATRE</span>
              <Button variant="primary">Buy Tickets</Button>
            </Col>
          </Row>
        </li>
        <li>
          <Row className="justify-content-center mb-3">
            <Col
              xs={11}
              md={7}
              className="border-bottom pb-2 d-flex align-items-center justify-content-between"
            >
              <span style={{ width: "15%" }}>JULy 19</span>
              <span style={{ width: "20%" }}>TORONTO,ON</span>
              <span style={{ width: "40%" }}>BUDWEISER STAGE</span>
              <Button variant="primary">Buy Tickets</Button>
            </Col>
          </Row>
        </li>
        <li>
          <Row className="justify-content-center mb-3">
            <Col
              xs={11}
              md={7}
              className="border-bottom pb-2 d-flex align-items-center justify-content-between"
            >
              <span style={{ width: "15%" }}>July 22</span>
              <span style={{ width: "20%" }}>BRISTOW, VA</span>
              <span style={{ width: "40%" }}>JIGGY LUBE LIVE</span>
              <Button variant="primary">Buy Tickets</Button>
            </Col>
          </Row>
        </li>
        <li>
          <Row className="justify-content-center mb-3">
            <Col
              xs={11}
              md={7}
              className="border-bottom pb-2 d-flex align-items-center justify-content-between"
            >
              <span style={{ width: "15%" }}>July 29</span>
              <span style={{ width: "20%" }}>PHOENIX, AZ</span>
              <span style={{ width: "40%" }}>AK-CHIN PAVILION</span>
              <Button variant="primary">Buy Tickets</Button>
            </Col>
          </Row>
        </li>
        <li>
          <Row className="justify-content-center mb-3">
            <Col
              xs={11}
              md={7}
              className="border-bottom pb-2 d-flex align-items-center justify-content-between"
            >
              <span style={{ width: "15%" }}>Aug 2</span>
              <span style={{ width: "20%" }}>LAS VEGAS, NV</span>
              <span style={{ width: "40%" }}>T-MOBILE ARENA</span>
              <Button variant="primary">Buy Tickets</Button>
            </Col>
          </Row>
        </li>
        <li>
          <Row className="justify-content-center mb-3">
            <Col
              xs={11}
              md={7}
              className="border-bottom pb-2 d-flex align-items-center justify-content-between"
            >
              <span style={{ width: "15%" }}>Aug 7</span>
              <span style={{ width: "20%" }}>CONCORD, CA</span>
              <span style={{ width: "40%" }}>CONCORD PAVILION</span>
              <Button variant="primary">Buy Tickets</Button>
            </Col>
          </Row>
        </li>
      </ul>
    </Container>
  );
};
export default HomeMain;
