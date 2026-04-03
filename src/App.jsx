import "./App.css";
import React, { useState } from "react";
import Banner from "./components/Banner";
import CartButton from "./components/CartButton";
import Footer from "./components/Footer";
import MerchSection from "./components/MerchSection";
import MusicSection from "./components/MusicSection";
import Navbarr from "./components/Navbarr";
import CartItems from "./components/cart/CartItems";
const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <>
      <Navbarr onshow={handleShow} />
      <Banner />
      <MusicSection products={productsArr} />
      <MerchSection />
      <CartButton />
      <Footer />
      <CartItems show={show} onhide={handleClose} />
    </>
  );
};

export default App;
