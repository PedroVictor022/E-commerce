import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { HeaderContainer, Navbar, SearchInput, Title } from "./UI"

export const Header = () => {
   const { cart } = useContext(CartContext); 

   return (
      <HeaderContainer>
         <div
            className="top-container"
         >
            <SearchInput
               placeholder="Macbook PRO"
            />
            <Title>Dev Shop</Title>
            <Navbar>
               <Link to="">Home</Link>
               <Link to="/my-cart">Carrinho</Link>
               <Link to="*">Login</Link>
            </Navbar>
         </div>
         <div className="promo-container">
            <p>Todos os produtos com 10% de desconto, APROVEITE! {cart.length}</p>
         </div>
      </HeaderContainer>
   )
}