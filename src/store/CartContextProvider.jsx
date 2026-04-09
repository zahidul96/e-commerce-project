import React, { useState } from "react";
import CartContext from "./CartContext";
const CartContextProvider = (props)=>{
    const [items,setItems] = useState([]);
    const addItems = (album) =>{
        setItems((prevItems)=>{
            const existingIndex = prevItems.findIndex((item)=>item.title==album.title);
            const existingItem = prevItems[existingIndex];
            if(existingItem){
                const updatedItem = {
                    ...existingItem,
                quantity:existingItem.quantity+1}
                const updatedItems = [...prevItems];
            updatedItems[existingIndex] = updatedItem;
            return updatedItems;
            }
            else {
                return [...prevItems,{...album,quantity:1}]
            }
        })
    }
    const cartContext = {
        item:items,
        addItems:addItems
    }
    console.log(items);
      return(
        <CartContext.Provider value={cartContext}>
          {props.children}
        </CartContext.Provider>
      )
}
export default CartContextProvider;