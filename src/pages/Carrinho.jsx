import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useN, useNavigate, useNavigateavigate } from "react-router-dom"

import styled from "styled-components";
import { ProductContainer, ProductItem } from "../components/product";
import { Modal } from "../components/Modal";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const AlignCenter = styled.div` 
  .alignCenter {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    button {
      border: none;
      border-radius: 6px;
      padding: 1rem;
      background-color: #12ac64;
      cursor: pointer;
      font-size: 20px;
      color: #eee;
      font-weight: 800;
      transition: 0.2s;
      &:hover {
        background-color: #0cb63f;
      }
    }
  }
`;

const TotalPriceComponent = ({ children }) => {
  return <AlignCenter>{children}</AlignCenter>;
};



export const CartPage = () => {
  
  const { cart, setCart } = useContext(CartContext);
  let menuPrincipal = useNavigate();

  const completeBuy = () => {
    alert("Compra finalizada com sucesso!");
    setCart([]);
  }

  const totalPrice = () => {

    if (cart.length > 0) {
      const price = cart.map((item) => item.price);
      const sumTotal = price.reduce((item, i) => {
        return (item += i);
      });
      return (
        <TotalPriceComponent>
          <div className="alignCenter">
            <p> Valor total do carrinho R${sumTotal},00</p>
            <button 
              onClick={completeBuy}
            >Comprar</button>
          </div>
        </TotalPriceComponent>
      );
    } else {
      return (
        <TotalPriceComponent>
          <p>Carrinho de compras vazio.</p>
        </TotalPriceComponent>
      );
    }
  };

  const removeProduct = (id) => {
    const rmItem = cart.filter((item) => item.id !== id);
    setCart(rmItem);
  };

  return (
    <CartContainer>
      <h1>Produtos no carrinho</h1>

      <div className="total-price">{totalPrice()}</div>

      <ProductContainer>
        {cart.map((item, id) => {
          return (
            <ProductItem key={id}>
              <div className="flexStart">
                <div className="btn-delete">
                  {/* Adicionar um botao para excluir o produto do carrinho */}
                  <button onClick={() => removeProduct(item.id)}>X</button>
                </div>
                <img src={item.img} alt="" />
                <h2>{item.name}</h2>
                <p>de R${item.price}</p>
              </div>
            </ProductItem>
          );
        })}
      </ProductContainer>
    </CartContainer>
  );
};
