import styled from "styled-components";

export const Container = styled.div`
   width: 100vw;
   height: 100vh;

   background-color: #bebebe;
`

// Header Styles
export const HeaderContainer = styled.header`
   width: 100%;
   display: flex;
   flex-direction: column;

   border-bottom:1px solid #fefefe;

   .top-container {
      flex:1;
      display: flex;
      align-items:center;
      justify-content: space-around;
   
      background-color: #222;

      padding: 1rem; 
   }
   .promo-container {
      display: flex;
      justify-content: center;
      
      color: #fff;
      font-weight: 600;
      padding: 0.2rem;

      background-color: #02c067;
   }

`
export const SearchInput = styled.input`
   border: none;
   border-radius: 2px;
   padding: 0.3rem;
   text-align:center;
   outline: none;
`
export const Title = styled.h1`
   font-weight: 600;
   font-size: 36px;
   color:#fefefe;
`
export const Navbar = styled.nav`
   display: flex;
   gap: 1rem;
   align-items:center;

   a {
      font-size:20px;
      text-decoration: none;
      color: #fefefe;
      padding: 0.2rem;
      background-color: transparent;
      border-radius:0.6rem;
      &:hover {
         background-color: red;
      }
   }
`