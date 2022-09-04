import { useContext } from "react";
import { useState } from "react"
import { Product } from "../components/product"
import { CartContext } from "../context/CartContext";
import { ProductsList } from "../data/data";

export const Home = () => {
   const { cart, setCart} = useContext(CartContext);
   const [products, setProducts] = useState(ProductsList);

   // const [ cart, setCart ] = useState([]);

   const addToCart = id => {
      const pSelected = products.find((item) => item.id === id)
      setCart([...cart, pSelected])
      console.log(cart);
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