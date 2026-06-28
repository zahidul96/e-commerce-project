import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import AuthContext from "./auth/AuthContext";
import AboutPage from "./pages/aboutPage/AboutPage";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import StorePage from "./pages/storePage/StorePage";
import ContactUsPage from "./pages/contactUsPage/ContactUsPage";
import ProductDetail from "./pages/ProductDetail";
import LoginPage from "./pages/loginPage/LoginPage";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const authCtx = useContext(AuthContext);
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
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://swapi.info/api/films");
        if (!response.ok) {
          throw new Error("Something went wrong...retrying");
        }
        const data = await response.json();
        
      } catch (error) {
        console.log(error);
        setError(error.message);
        setTimeout(() => {
          fetchProducts();
        }, 5000);
      } finally {
        setLoading(false);
      }
      
    };
    fetchProducts();
    
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    {
      path: "/store",
      element: authCtx.isLoggedIn ? (
        <StorePage
          products={productsArr}
          show={show}
          onShow={handleShow}
          onhide={handleClose}
        />
      ) : (
        <Navigate to="/login" replace />
      ),
    },
    { path: "/about", element: <AboutPage /> },
    { path: "/contact", element: <ContactUsPage /> },
    {
      path: "/store/:productId",
      element: <ProductDetail products={productsArr} />,
    },
    {
      path: "/login",
      element: !authCtx.isLoggedIn ? (
        <LoginPage />
      ) : (
        <Navigate to="/store" replace />
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
