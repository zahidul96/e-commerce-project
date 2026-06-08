import React from "react";
import { useParams } from "react-router-dom";
import {Button} from 'react-bootstrap';
const ProductDetail = (props) => {
  const params = useParams();
  const { productId } = params;
  const product = props.products.find((item) => item.title === productId);
  return (
    <>
      <h1
        className="d-flex justify-content-center bg-secondary text-white align-items-center"
        style={{ height: "70px", padding: "20px" }}
      >
        Product Detail Page
      </h1>
      <div className="d-flex">
        <div>
          <img
            src={product.imageUrl}
            style={{ width: "10%", height: "auto" }}
            alt={product.title}
          />
          <img
            src={product.imageUrl}
            style={{ width: "15%", height: "auto" }}
            alt={product.title}
          />
          <img
            src={product.imageUrl}
            style={{ width: "20%", height: "auto" }}
            alt={product.title}
          />
          <img
            src={product.imageUrl}
            style={{ width: "20%", height: "auto" }}
            alt={product.title}
          />
        </div>
        

        <div
          className="p-4"
          style={{
            width: "50%",
            backgroundColor: "#a4b8cc",
            marginLeft: "20px",
          }}
        >
          <h3>Product highlights:</h3>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <Button variant="primary">Add to Cart</Button>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
