import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);
   const [cartTotal, setCartTotal] = useState([]);

   const products1 = [
      {
         id: Math.random(Math.random() * 100).toFixed(5),
         name: "Teste 1",
         img: "teste",
         price: 100000,
      }
   ]
   
   return (
      <CartContext.Provider
         value={{ cart, setCart, products1}}
      >
         {children}
      </CartContext.Provider>
   )
}
export default CartProvider;