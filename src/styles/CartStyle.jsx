import styled from "styled-components";

export const ProductContainer = styled.div`
   width: 50%;
   display: flex;
   flex-wrap: wrap;
   gap: 1rem;

   margin: 1rem auto;
`

export const ProductItem = styled.div`
   width: 230px;

   display: flex;
   flex-direction: column;
   gap: 0.2rem;

   border-radius: 0.2rem;

   background-color: #fefefe;
   padding: 1rem;

   img {
      width: 200px;
      height: 150px;
   }

`