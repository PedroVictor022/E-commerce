import { useContext } from "react";
import { useState } from "react"
import { Product } from "../components/product"
import { CartContext } from "../context/CartContext";
import { ProductsList } from "../data/data";

export const Home = () => {
   const { cart, setCart, product } = useContext(CartContext);
   const [products, setProducts] = useState(ProductsList);

   const addToCart = id => {
      let pSelected = products.find((item) => item.id === id)
      products.push({
         ...pSelected,
         uniqueID: Math.random(Math.random() * 10)
      })
      console.table(products, pSelected)
      setCart([...cart, pSelected])
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