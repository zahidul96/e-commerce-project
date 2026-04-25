import React from "react";
import CartContextProvider from "../../store/CartContextProvider";
import HomeNavbar from "./HomeNavbar";
import HomeBanner from "./HomeBanner";
import HomeMain from "./HomeMain";
import HomeFooter from "./HomeFooter";
const HomePage = () => {
  return (
    <>
      <CartContextProvider>
        <HomeNavbar />
        <HomeBanner/>
        <HomeMain/>
        <HomeFooter/>
      </CartContextProvider>
    </>
  );
};
export default HomePage;
