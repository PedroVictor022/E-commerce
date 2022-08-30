import styled from "styled-components";

export const Container = styled.div`
   width: 100vw;
   height: 100vh;

   background-color: #bebebe;
`

// Header Styles
export const HeaderC = styled.header`
   display:flex;
   align-items: center;
   justify-content: space-around;

   padding: 1rem;

   color:#fff;
   background-color: #1c1c1c;

   border-bottom: 1px solid #2f2f2f;

   h1 {
      font-size: 36px;
   }

   .research-container {
      display: flex;
      gap:1rem;
   }
`
export const NavItem = styled.div`
   display: flex;
   gap:1rem;
`
export const Button = styled.button`
   padding: 0.5rem;
   border-radius: 6px;
   border:none;
   cursor:pointer;

   background-color: #7335e7;
   color: #eee;

   font-size: 1rem;
   font-weight: 600;

   transition: all .2s;
   &:hover {
      transition: all .2s;
      background-color: #915af8;
   }
`