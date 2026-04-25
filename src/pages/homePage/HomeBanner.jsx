import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Play} from 'react-bootstrap-icons';
const HomeBanner = () => {
  return (
    <>
      <Container fluid className="bg-secondary mt-1 py-3">
        <Row>
          <Col>
            <h1 className="display-1 fw-bold text-center">The Generics</h1>
             <div className="text-center mt-2 py-4">
              <Button variant="outline-info" className="text-white fw-700 fs-3">Get Our Latest Albums</Button>
             </div>
             <div className="text-center">
               <Play size={70} className="me-2 border rounded-circle p-2 text-center cursor-pointer" color="black" />
             </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HomeBanner;
