import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { ProductItem } from "../styles/CartStyle"

export const CartPage = () => {
   const { cart } = useContext(CartContext)
   return (
      <div>
         <h1>Seu carrinho</h1>
         {
            cart.map(item => {
               return (
                  <ProductItem
                     key={item.id}
                  >
                     <div className="flexStart">
                        <img src={item.img} alt="" />
                        <h2>{item.name}</h2>
                        <p>de R${item.price}</p>
                     </div>
                     <button>Comprar</button>
                  </ProductItem>
               )
            })
         }
      </div>
   )
}