import { useContext } from "react"
import { CartContext } from "../context/CartContext"

import styled from "styled-components"
import { ProductContainer, ProductItem } from "../components/product"

const CartContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top:1rem;
`

const TotalPriceComponent = ({ children }) => {
   return (
      <div>
         {children}
      </div>
   )
}

export const CartPage = () => {
   const { cart, setCart } = useContext(CartContext);

   console.table(cart)

   const totalPrice = () => {
      if (cart.length > 0) {
         const price = cart.map(item => item.price);
         const sumTotal = price.reduce((item, i) => {
            return item += i;
         })
         return (
            <TotalPriceComponent>
               <p> Valor total do carrinho R${sumTotal},00</p>
            </TotalPriceComponent>
         )
      } else {
         return (
            <TotalPriceComponent>
               <p>Carrinho de compras vazio.</p>
            </TotalPriceComponent>
         )
      }
   };

   const removeProduct = (id) => {
      const rmItem = cart.filter((item) => item.id !== id);
      setCart(rmItem);
   }




   return (
      <CartContainer>
         <h1>Produtos no carrinho</h1>

         <div className="total-price">
            {
               totalPrice()
            }
         </div>

         <ProductContainer>
            {
               cart.map((item, id) => {
                  return (
                     <ProductItem
                        key={id}
                     >
                        <div className="flexStart">
                           <div className="btn-delete">
                              {/* Adicionar um botao para excluir o produto do carrinho */}
                              <button onClick={() => removeProduct(item.id)}>X</button>
                           </div>
                           <img src={item.img} alt="" />
                           <h2>{item.name}</h2>
                           <p>de R${item.price}</p>
                        </div>
                        <button>Comprar</button>
                     </ProductItem>
                  )
               })
            }
         </ProductContainer>
      </CartContainer>
   )
}