import { ProductContainer, ProductItem } from "../styles/CartStyle"

export const Product = ({ products, addToCart }) => {
   return (
      <ProductContainer>
         {
            products.map((item) => {
               return (
                  <ProductItem
                     key={item.id}
                  >
                     <div className="flexStart">
                        <img src={item.img} alt="" />
                        <h2>{item.name}</h2>
                        <p>de R${item.price}</p>
                     </div>
                     <button onClick={() => addToCart(item.id)}>Comprar</button>
                  </ProductItem>
               )
            })
         }
      </ProductContainer>
   )
}