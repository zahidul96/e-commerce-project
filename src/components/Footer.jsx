import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Youtube } from 'react-bootstrap-icons';
import { Spotify } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <>
      <Container fluid className="mt-5">
        <Row
          className="d-flex justify-content-evenly align-items-center"
          style={{ backgroundColor: "#56CCF2" }}
        >
          <Col lg={4}>
            <h2 className="display-3 text-white fw-bold">The Generics</h2>
          </Col>
          <Col lg={4}>
            <ul
              className="d-flex justify-content-around"
              style={{ listStyle: "none"}}
            >
              <li>
                <a className="text-decoration-none" href="https://www.youtube.com/" target="_blank">
                  <Youtube size={30} color="white"/></a>
              </li>
              <li>
                <a className="text-decoration-none" href="https://open.spotify.com/" target="_blank">
                  <Spotify size={30} color="white"/>
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="https://www.facebook.com/" target="_blank">
                <Facebook size={30} color="white"/>  
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Footer;
