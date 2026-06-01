import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
const ContactForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const formDataHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };
    props.onAddData(userData);
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            xs={12}
            className="d-flex justify-content-center align-items-center bg-secondary"
          >
            <form
              className="d-flex flex-column m-3 bg-light"
              style={{
                width: "25%",
                border: "1px solid #ccc",
                padding: "20px",
                borderRadius: "5px",
              }}
              onSubmit={formDataHandler}
            >
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => {
                  setFormData((prevStates) => {
                    return { ...prevStates, name: e.target.value };
                  });
                }}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData((prevStates) => {
                    return { ...prevStates, email: e.target.value };
                  });
                }}
              />
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  setFormData((prevStates) => {
                    return { ...prevStates, phone: e.target.value };
                  });
                }}
              />
              <button
                type="submit"
                className="mt-3 bg-primary"
                style={{
                  color: "white",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  width: "50%",
                  margin: "0 auto",
                }}
              >
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ContactForm;
