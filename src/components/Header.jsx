import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { RiShoppingCart2Fill, RiHome2Fill, RiUser2Fill } from "react-icons/ri"

import styled from "styled-components";

const HeaderS = styled.header`
   width: 100%;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   
   .promo-container {
      background-color: #25c76e;
      width: 100%;
      text-align: center;
      padding: 1rem;
      font-weight: 800;
   }
`
const TopContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 5rem;
   padding-top: 1rem;
   padding-bottom: 1rem;
   width: 100%;
   background-color: #4f1399;
   transition: .2s;

   input {
      padding: 0.2rem;
      border-radius:6px;
      border: none;
      text-align: center;
      outline: none;
   }

   h1 {
      color: #fefefe;
   }

   .navbar {
      display: flex;
      gap: 1rem;
      a {
         color: #fefefe;
         text-decoration: none;
         padding: 0.5rem;
         background-color: transparent;
         border-radius: 0.4rem;
         transition: .2s;
         &:hover {
            transition: .2s;
            background-color: #5f2d9c;
         }
      }
   }

   @media (max-width:720px) {
      transition: .1s;
      input {
         display: none;
      }
   }
   @media (max-width:420px) {
      display: flex;
      flex-direction: column;
      .navbar {
         display: flex;
         gap: 1rem;
      }
   }
`

export const Header = () => {
   const { cart } = useContext(CartContext); 

   return (
      <HeaderS>
         <TopContainer>
            <input
               placeholder="Macbook PRO"
            />
            <h1>Tech Shop</h1>
            <div className="navbar">
               <Link to=""><RiHome2Fill/></Link>
               <Link to="/my-cart"><RiShoppingCart2Fill/>{cart.length}</Link>
               <Link to="*"><RiUser2Fill/></Link>
            </div>
         </TopContainer>
         <div className="promo-container">
            <p>Todos os produtos com 10% de desconto!</p>
         </div>
      </HeaderS>
   )
}