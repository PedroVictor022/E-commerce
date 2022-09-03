import { useState } from "react"
import { Product } from "../components/product"

export const Home = () => {
   const [products, setProducts] = useState([
      {
         id:1,
         name: 'Macbook M1',
         price: 10000,
      },
      {
         id:2,
         name: 'Razer Nagga',
         price: 1200,
      },
      {
         id:3,
         name: 'Monitor Gamer',
         price: 600,
      },
      {
         id:4,
         name: 'Windows 11 PRO',
         price: 200,
      },
      {
         id:5,
         name: 'Keyboard K2',
         price: 90,
      },
      {
         id:6,
         name: 'Keyboard K3',
         price: 122,
      },
   ])

   const [ cart, setCart ] = useState([]);

   const addToCart = id => {
      const pSelected = products.find((item) => item.id === id)
      setCart([...cart, pSelected])
      console.log(cart);
   }

   return (
      <div>
         Homepage
         Produtos no carrinho - {cart.length}
         <Product 
            products={products}
            addToCart={addToCart}
         />
      </div>
   )
}