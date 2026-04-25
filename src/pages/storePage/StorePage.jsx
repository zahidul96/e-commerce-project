import React from "react";
import CartContextProvider from "../../store/CartContextProvider";
import Navbarr from "../../components/Navbarr";
import Banner from "../../components/Banner";
import MusicSection from "../../components/MusicSection";
import MerchSection from "../../components/MerchSection";
import CartButton from "../../components/CartButton";
import Footer from "../../components/Footer";
import CartItems from "../../components/cart/CartItems";
const StorePage = (props) => {
  return (
    <>
      <CartContextProvider>
        <Navbarr onShow={props.onShow} />
        <Banner />
        <MusicSection products={props.products} />
        <MerchSection products={props.products} />
        <CartButton />
        <Footer />
        <CartItems show={props.show} onhide={props.onhide} />
      </CartContextProvider>
    </>
  );
};
export default StorePage;
