import { useContext } from "react";
import { useState } from "react"
import { Product } from "../components/product"
import { CartContext } from "../context/CartContext";
import { ProductsList } from "../data/data";
import { Container } from "../styles/UI";

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
      <Container>
         Homepage
         Produtos no carrinho - {cart.length}
         <Product 
            products={products}
            addToCart={addToCart}
         />
      </Container>
   )
}