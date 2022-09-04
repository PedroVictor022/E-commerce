import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Global = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
   }
`

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   background-color: #f3f3f3;
`