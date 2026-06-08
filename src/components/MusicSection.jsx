import { useContext } from "react";
import { Link } from "react-router-dom";
import "./MusicSection.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import CartContext from "../store/CartContext";
const MusicSection = (props) => {
  const ctx = useContext(CartContext);
  const addToCartItems = (prods) => {
    console.log("Adding item:", prods.title);
    ctx.addItems(prods);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h2 className="text-center mt-3">Music</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-around mt-3">
          {props.products.map((product, index) => (
            <Col lg={6} key={index}>
              <h3 className=" display-8 text-center">{product.title}</h3>
              <div className="d-flex justify-content-center">
                <Link to= {`/store/${product.title}`}>
                  <img src={product.imageUrl} alt={product.title} />
                </Link>
              </div>
              <div
                className="d-flex justify-content-center mt-3 mb-5"
                style={{ gap: "160px" }}
              >
                <span>${product.price}</span>
                <Button
                  variant="primary"
                  onClick={() => {
                    addToCartItems(product);
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </Col>
          ))}
        </Row>

        {/* <Row className="d-flex d-flex justify-content-around mt-3" id="content">
          <Col lg={3} style={{ maxWidth: "22%" }}>
            <h3 className="text-center">{}</h3>
            <div className="d-flex justify-content-center">
              <img src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png" />
            </div>
            <div className="d-flex justify-content-between mt-3">
              <span>$12.09</span>
              <Button variant="primary">Add to Cart</Button>
            </div>
          </Col>
          <Col lg={3} style={{ maxWidth: "22%" }}>
            <h3 className="text-center">Album2</h3>
            <div className="d-flex justify-content-center">
              <img src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png" />
            </div>
            <div className="d-flex justify-content-between mt-3">
              <span>$12.09</span>
              <Button variant="primary">Add to Cart</Button>
            </div>
          </Col>
        </Row>
        <Row className="d-flex d-flex justify-content-around mt-3">
          <Col lg={3} style={{ maxWidth: "22%" }}>
            <h3 className="text-center">Album3</h3>
            <div className="d-flex justify-content-center">
              <img src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png" />
            </div>
            <div className="d-flex justify-content-between mt-3">
              <span>$12.09</span>
              <Button variant="primary">Add to Cart</Button>
            </div>
          </Col>
          <Col lg={3} style={{ maxWidth: "22%" }}>
            <h3 className="text-center">Album4</h3>
            <div className="d-flex justify-content-center">
              <img src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png" />
            </div>
            <div className="d-flex justify-content-between mt-3">
              <span>$12.09</span>
              <Button variant="primary">Add to Cart</Button>
            </div>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};
export default MusicSection;
