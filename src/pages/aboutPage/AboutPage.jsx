import React from "react";
import Banner from "../../components/Banner";
import CartContextProvider from "../../store/CartContextProvider";
import AboutNavbar from "./AboutNavbar";
import AboutMain from "./AboutMain";
import Footer from "../../components/Footer";
const AboutPage = () => {
  return (
    <>
      <CartContextProvider>
        <AboutNavbar/>
        <Banner/>
        <AboutMain/>
        <Footer/>
      </CartContextProvider>
    </>
  );
};
export default AboutPage;
