import styled from "styled-components";

const ProductContainer = styled.div`
   display: grid;
   grid-template-columns: 2fr 2fr 2fr;

   width: 70%;

   margin: 2rem auto;

   gap: 1rem;
   @media (max-width:900px) {
      width: 60%;
      grid-template-columns: 2fr 2fr;
   }
   @media (max-width:600px) {
      grid-template-columns: 1fr;
   }
`

const ProductItem = styled.div`

   display: flex;
   flex-direction: column;

   padding: 1rem;

   background-color: #f5f5f5;

   border-radius: 8px;
   box-shadow: 0px 0px 3px 0px gray;

   .flexStart {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      word-wrap: break-word;
      padding: 0.5rem;
   
      margin-bottom: 1rem;
      img {
         border-bottom:1px solid #22222234;
         width: 120px;
         height: 100px;
         margin-bottom: 1rem;
      }
      .name {
         color: #272727;
         height: 60px;
      }

      .desc {
         color: #272727;
         width: auto;
         height: 50px;
      }

      @media (max-width:700px) {
         .desc {
            margin-bottom: 10px;
         }
      }

      .price {
         color: #01c201;
         font-weight: 600;
      }
   }

   button { 
      border: none;
      border-radius: 6px;
      padding: 1rem;
      background-color: #5f2d9c;
      cursor: pointer;
      font-size: 20px;
      color: #eee;
      font-weight: 800;
      transition: .2s;
      &:hover {
         background-color: #984ff1;
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
                        <div className="flexStart">
                          <img src={item.img} alt="" />
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