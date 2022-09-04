import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "../context/CartContext";
import { CartPage } from "../pages/Carrinho";
import { Home } from "../pages/Home";
import { Header } from "../components/Header";

export const RoutesApp = () => {

   return (
      <>
         <CartProvider>
            <BrowserRouter>
               <Header />
               <Routes>
                  <Route path='/' exact element={<Home />} />
                  <Route
                     path='/my-cart'
                     element={<CartPage />}
                  />
               </Routes>
            </BrowserRouter>
         </CartProvider>
      </>
   )
}