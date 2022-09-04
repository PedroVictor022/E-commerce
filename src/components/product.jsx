import styled from "styled-components"

const ProductContainer = styled.div`
   display: grid;
   grid-template-columns: 5fr 3fr 5fr;
   gap: 1rem;

   width: 50%;

   margin: 2rem auto;
`

const ProductItem = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-direction:column;

   padding: 0.5rem;
   gap: 0.5rem;
   border-radius: 4px;

   background-color: #fff;

   .flexStart {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
   }

   .name {
      color: #2d2d2d;
   }
   .desc {
      font-size: 16px;
      flex-wrap: wrap;
   }
   img {
      width: 220px;
      height: 180px;
      border-bottom:1px solid #222;
   }
   button {
      border: none;
      padding: 0.6rem;
      width:100%;
      background-color: #8f3ee0;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      border-radius: 0.8rem;
      cursor: pointer;
      
      transition: all .1s;
      &:hover {
         transition: all .1s;
         background-color: #a95ff3;
      }
   }
`

export const Product = ({ products, addToCart }) => {
   return (
      <ProductContainer>
         {
            products.map((item) => {
               return (
                  <ProductItem key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <div className="flexStart">
                           <h2 className="name">{item.name}</h2>
                        <p className="desc">{item.desc}</p>
                        <p className="price">de R${item.price}</p>
                        </div>
                     <button onClick={() => addToCart(item.id)}>Comprar</button>
                  </ProductItem>
               )
            })
         }
      </ProductContainer>
   )
}