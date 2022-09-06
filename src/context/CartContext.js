import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
   const [ cart, setCart ] = useState([]);
   const [ cartTotal, setCartTotal ] = useState([]);

   return (
      <CartContext.Provider 
         value={{ cart, setCart }}
      >
         { children }
      </CartContext.Provider>
   )
}
export default CartProvider;