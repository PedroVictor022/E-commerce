import { ProductContainer, ProductItem } from "../styles/CartStyle"

export const Product = ({products, addToCart}) => {
   return (
      <ProductContainer>
         {
            products.map((item) => {
               return (
                  <ProductItem 
                     key={item.id}
                  >
                     <h2>{item.name}</h2>
                     <img src={item.img} alt="" />
                     <p>de R${item.price}</p>
                     <button onClick={() => addToCart(item.id)}>Comprar</button>
                  </ProductItem>
               )
            })
         }
      </ProductContainer>
   )
}