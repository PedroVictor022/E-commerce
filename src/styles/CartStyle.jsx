import styled from "styled-components";

export const ProductContainer = styled.div`
   width: 70%;
   display: flex;
   flex-wrap: wrap;
   gap: 1rem;

   margin: 1rem auto;
   position: absolute;
   left: 25%;
   top: 15%;
`

export const ProductItem = styled.div`
   position: relative;
   width: 230px;
   height: 270px;

   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 0.2rem;

   border-radius: 0.2rem;

   background-color: #fefefe;
   padding: 1rem;

   img {
      width: 200px;
      height: 150px;
      padding:0.5rem;
      border-bottom:1px solid #c4c4c4;
   }

   button {
      width: 70%;
      padding: 0.2rem;
      border: none;
      border-radius:0.6rem;

      font-size: 20px;
      font-weight: 600;
      cursor:pointer;

      position: absolute;
      top: 85%;


      background-color: #a97be9;
      color: #fefefe;

      transition: all .2s;
      &:hover {
         width: 90%;
         border-radius: 1rem;
      }
   }

`