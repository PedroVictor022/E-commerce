import styled from "styled-components";

export const Container = styled.div`
   width: auto;
   height: 100vh;
   background-color: #ebebeb;
`

// Header Styles
export const HeaderContainer = styled.header`
   width: 100%;
   display: flex;
   flex-direction: column;

   .top-container {
      flex:1;
      display: flex;
      align-items:center;
      justify-content: space-around;
   
      background-color: #5E2F98;

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
   }
`