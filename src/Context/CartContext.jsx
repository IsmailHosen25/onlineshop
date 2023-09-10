import React, {useState, createContext } from "react";
export const CartContext=createContext({})


const CartProvider=({children})=>{
     const [cartitem,setcartitem]=useState([])
     return <CartContext.Provider value={{cartitem,setcartitem}}>
        {children}
     </CartContext.Provider>
}
export default CartProvider