import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

export const Header = () => {
   const { cart } = useContext(CartContext); 

   return (
      <div>
         <div
            className="top-container"
         >
            <input
               placeholder="Macbook PRO"
            />
            <h1>Dev Shop</h1>
            <div>
               <Link to="">Home</Link>
               <Link to="/my-cart">Carrinho</Link>
               <Link to="*">Login</Link>
            </div>
         </div>
         <div className="promo-container">
            <p>Todos os produtos com 10% de desconto, APROVEITE! {cart.length}</p>
         </div>
      </div>
   )
}