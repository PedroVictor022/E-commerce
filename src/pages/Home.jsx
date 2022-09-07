import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react"
import { Product } from "../components/product"
import { CartContext } from "../context/CartContext";
import { ProductsList } from "../data/data";

export const Home = () => {
   const { cart, setCart, product1 } = useContext(CartContext);
   const [products, setProducts] = useState(ProductsList);

   const addToCart = id => {
      let pSelected = products.find((item) => item.id === id)
      
      const newID = {
         ...pSelected,
         id: Math.random(Math.random() * 10)
      }
      
      setCart([...cart, newID])
   }

   return (
      <div>
         <Product 
            products={products}
            addToCart={addToCart}
         />
      </div>
   )
}