import "./App.css";
import React, { useState, useEffect } from "react";
import AboutPage from "./pages/aboutPage/AboutPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import StorePage from "./pages/storePage/StorePage";

const App = () => {
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
  useEffect(()=>{
       const fetchProducts = async ()=>{
        try{
          const response = await fetch('https://swapi.info/api/films');
          if(!response.ok){
            throw new Error('Failed to fetch products');
          }
          const data = await response.json();
          console.log(data)
        }
        catch(error){
          console.log("Error fetching", error);
        }
       }
       fetchProducts();
  },[])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    {
      path: "/store",
      element: (
        <StorePage
          products={productsArr}
          show={show}
          onShow={handleShow}
          onhide={handleClose}
        />
      ),
    },
    { path: "/about", element: <AboutPage /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
