import React from "react";
const CartContext = React.createContext({
    item:[],
    addItems:()=>{}
})
export default CartContext;