import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const AboutMain = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} className=" mt-2 d-flex justify-content-center align-items-center">
            <h2 className="text-center">About</h2>
          </Col>
          <Col xs={8} className="mx-auto mt-4">
            <img
              src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
              style={{ width: "200px", height: "200px", borderRadius: "50%", margin: "20px 50px", float: "left" }}
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit neque deserunt minima, voluptatum eligendi architecto facilis voluptas expedita, molestias ab repellendus iure! Eos dolorem molestias, eligendi nam eum ducimus.
            Officiis, nostrum tempore repellendus vitae enim esse quibusdam ad labore saepe doloribus perferendis exercitationem atque consequuntur possimus, eligendi aspernatur velit itaque accusantium similique nobis. Natus suscipit inventore omnis recusandae. Nam.
            Cumque consequatur in dolorum aliquam molestias libero minus, quo distinctio, ab dolores cupiditate iusto ea rerum enim ut. Similique pariatur officiis explicabo eaque quo placeat tempore aperiam quae minus? Molestiae.
            Veniam omnis repellat eius suscipit repellendus asperiores, assumenda vitae, natus delectus ut sint qui cumque nam aut esse placeat provident amet, sit quas sed labore? Beatae aspernatur a consequatur. Quidem!
            Illo quo voluptates ea necessitatibus inventore sed ipsa eaque minus, fugiat totam quia nemo quaerat corrupti tenetur suscipit nulla aspernatur. Voluptatibus obcaecati, hic necessitatibus mollitia beatae ratione excepturi laborum adipisci.
            Doloremque id totam neque aliquam corporis distinctio, vero eius eaque, unde explicabo tempore deserunt quo ut reprehenderit dolorum perspiciatis est rerum, repellat optio tempora expedita! Commodi possimus eaque sed rerum.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AboutMain;
