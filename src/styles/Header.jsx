import { HeaderContainer, Navbar, SearchInput, Title } from "./UI"

export const Header = () => {
   return (
      <HeaderContainer>
         <div
            className="top-container"
         >
            <SearchInput
               placeholder="Macbook PRO"
            />
            <Title>Dev Shop</Title>
            <Navbar>
               <a href="">Home</a>
               <a href="">Carrinho</a>
               <a href="">Login</a>
            </Navbar>
         </div>
         <div className="promo-container">
            <p>Todos os produtos com 10% de desconto, APROVEITE!</p>
         </div>
      </HeaderContainer>
   )
}