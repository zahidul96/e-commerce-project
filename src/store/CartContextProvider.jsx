import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";
import { useContext } from "react";
import AuthContext from "../auth/AuthContext";
const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const authCtx = useContext(AuthContext)
  const email = authCtx.email
  console.log(email,authCtx.token)
  const addItems = (album) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.title == album.title,
      );
      const existingItem = prevItems[existingIndex];
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        const updatedItems = [...prevItems];
        updatedItems[existingIndex] = updatedItem;
        return updatedItems;
      } else {
        return [...prevItems, { ...album, quantity: 1 }];
      }
    });
  };
  useEffect(() => {
    const dataRetrieveHandler = async () => {
      try {
        const response = await fetch(
          `https://crudcrud.com/api/b250b24394a2419ab59c638c664faca9/cart${email}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          },
        );
        if (!response.ok) {
          throw new Error("failed to store item in crud");
        }
        const data = await response.json();
        console.log("data",data)
        setItems(data)
      } catch (err) {
      console.error(err)
        alert(err.message);
      }
    };
    dataRetrieveHandler()
    console.log("uuuuuuuuu")
  }, []);
  const cartContext = {
    item: items,
    addItems: addItems,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
